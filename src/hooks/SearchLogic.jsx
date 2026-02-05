//src/hooks/SearchLogic.jsx

import { useState } from "react";
import { searchRule } from "../components/SearchHelper";

export function useSearchLogic(products){
  const [searchText, setSearchText] = useState("")
  const [hasTyped, setHasTyped] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [searchStatus, setSearchStatus] = useState("waiting")
  const [suggestions, setSuggestions] = useState([])
  const [results, setResults] = useState([])

  const updateSearchText = (value) =>{
    setSearchText(value);

    if (value.trim() === ""){
      setHasTyped(false);
      setSuggestions([]);
      setResults([]);
      setSearchStatus("waiting");
      return;
    }

    setHasTyped(true);
    setSearchStatus("waiting");
    setResults([]);

    const matched = searchRule(products, value);
    setSuggestions(matched);
  }

  const executeSearch = (value) =>{
    const textToSearch = value ?? searchText;

    if (textToSearch === ""){
      setResults([]);
      setSearchStatus("empty");
      return;
    }

    setIsLoading(true);

    setTimeout(()=>{
      const foundResults = searchRule(products, textToSearch);
      setResults(foundResults);

      if (foundResults.length === 0){
        setSearchStatus("no results");
      } else {
        setSearchStatus("success");
      }
      
      setIsLoading(false);
    }, 2000);
  }

  return{
    searchText,
    hasTyped,
    searchStatus,
    suggestions,
    isLoading,
    results,
    updateSearchText,
    executeSearch
  }

}