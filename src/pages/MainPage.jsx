//src/pages/MainPage.jsx

  import { useEffect, useMemo, useState } from "react";
  import { useSearchLogic } from "../hooks/SearchLogic";
  import { searchRule } from "../components/SearchHelper";
  import Loader from "../components/Loader";
  import ProductList from "../components/Product/ProductList";
  import SearchInput from "../components/Search/SearchInput";

export default function SearchContainer() {
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { searchText, setSearchText } = useSearchLogic();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok){
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err)=>setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = useMemo(() => {
    if (!searchText.trim()) return products;
    return searchRule(products, searchText);
  }, [products, searchText]);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

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
