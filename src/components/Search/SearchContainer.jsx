//src/components/Search/SearchContainer.jsx

  import { useEffect, useMemo, useState } from "react";
  import { useSearchLogic } from "../../hooks/SearchLogic";
  import { searchRule } from "../SearchHelper";
  import Loader from "../Loader";
  import ProductList from "../Product/ProductList";
  import SearchInput from "./SearchInput";

export default function SearchContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { searchText, setSearchText } = useSearchLogic();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = useMemo(() => {
    if (!searchText.trim()) return products;
    return searchRule(products, searchText);
  }, [products, searchText]);

  if (loading) return <Loader />;

  return (
    <div>
      <SearchInput
        searchText={searchText}
        updateSearchText={setSearchText}
      />

      <ProductList results={filteredProducts} />
    </div>
  );
}
