 import { useNavigate } from "react-router-dom";
 import "../../style.css"

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="product-item"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <h3>{product.title}</h3>
      <p>{product.body.slice(0, 80)}...</p>
    </div>
  );
}
