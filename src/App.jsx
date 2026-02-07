 import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SearchContainer from "./pages/MainPage";
import ProductDetail from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider, useAuth } from "./context/AuthContext";

// ProtectedRoute
function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

          <Route path="/login" element={<LoginPage/>} />

          <Route path="/" 
          element={
          <ProtectedRoute>
            <SearchContainer/>
          </ProtectedRoute>
          }/>

          <Route path="/product/:id"
           element={
           <ProtectedRoute>
             <ProductDetail/>
           </ProtectedRoute>
           }/>

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
