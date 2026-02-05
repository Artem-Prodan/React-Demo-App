//App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchContainer from "./components/Search/SearchContainer";
import ProductDetail from "./components/Product/ProductDetail";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SearchContainer/>}/>
      <Route path="/product/:id" element={<ProductDetail/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
