//src/components/Search/SearchContainer.jsx
import { useEffect, useState } from "react";
import { useSearchLogic } from "../../hooks/SearchLogic";
import EmptyState from "../EmptyState";
import Loader from "../Loader";
import ProductList from "../Product/ProductList";
import SearchInput from "./SearchInput";
import Suggestion from "./Suggestion";


export default function SearchContainer(){

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }, []);


  const {
    searchText,
    hasTyped,
    searchStatus,
    suggestions,
    isLoading,
    results,
    updateSearchText,
    executeSearch
  } = useSearchLogic(products);

  const handleSuggestionClick = (product) =>{
    updateSearchText(product.name);
    executeSearch(product.name);
  }

    if (loading) {
    return <Loader />;
    }

  return (
    <div>
      <SearchInput
      searchText={searchText}
      updateSearchText={updateSearchText}
      executeSearch={executeSearch}
      />

      {hasTyped && suggestions.length > 0 && (
        <Suggestion 
        suggestions={suggestions}
        onSuggestionClick={handleSuggestionClick}
        />
      )}

      {isLoading && <Loader/>}
      {!hasTyped && <ProductList results={products} />}
      {!isLoading && hasTyped && searchStatus === "success" && (
        <ProductList results={results} />
      )}
      
      {!isLoading && hasTyped && searchStatus !== "waiting" && searchStatus !== "success" && (
        <EmptyState searchStatus={searchStatus} />
      )}
    </div>
  );
}