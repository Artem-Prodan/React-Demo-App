//App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchContainer from "./pages/MainPage";
import ProductDetail from "./pages/DetailPage";

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
