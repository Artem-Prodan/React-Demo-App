 import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      style={{ cursor: "pointer", border: "1px solid #ccc", padding: "10px" }}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <h3>{product.title}</h3>
      <p>{product.body.slice(0, 80)}...</p>
    </div>
  );
}
