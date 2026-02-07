
// custom hook to manage search input state (searchText) and its updater (setSearchText)

import { useState } from "react";


export function useSearchLogic() {
  const [searchText, setSearchText] = useState("");

  return {
    searchText,
    setSearchText,
  };
}
