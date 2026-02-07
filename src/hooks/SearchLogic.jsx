

import { useState } from "react";


export function useSearchLogic() {
  const [searchText, setSearchText] = useState("");

  return {
    searchText,
    setSearchText,
  };
}
