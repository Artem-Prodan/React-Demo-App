//src/pages/MainPage.jsx

  import { useEffect, useMemo, useState } from "react";
  import { useSearchLogic } from "../hooks/SearchLogic";
  import { searchRule } from "../components/SearchHelper";
  import Loader from "../components/Loader";
  import ProductList from "../components/Product/ProductList";
  import SearchInput from "../components/Search/SearchInput";
  import { useAuth } from "../context/AuthContext";

export default function SearchContainer() {
  const { user, logout } = useAuth(); // get user and logout function from context
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
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h2>Welcome, {user?.name || "Guest"}!</h2>
        <button onClick={logout} style={{ cursor: "pointer" }}>Logout</button>
      </header>

      <SearchInput
        searchText={searchText}
        updateSearchText={setSearchText}
      />

      <ProductList results={filteredProducts} />
    </div>
  );
}
