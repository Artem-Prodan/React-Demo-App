 import { useEffect, useState } from "react";
  import { useParams, useNavigate } from "react-router-dom";
  import Loader from "../components/Loader";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    setLoading(true);
    setError(null);

     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
          if(!res.ok){
            throw new Error("Product not found");
          }
          return res.json();
        })
        .then((data) => setProduct(data))
        .catch((err) => setError(err.message))
        .finally(()=> setLoading(false));
    }, [id]);

  if (loading) return <Loader/>;
  if (error) return <p>{error}</p>;

  return (
    <div className="detail-container">
      <h2 className="product-title">{product.title}</h2>
      <h4 className="product-description">Description:</h4>
      <p className="product-description-body">{product.body}</p>

      <button className="return-button" onClick={() => navigate("/")}>
        Back to Main Page
      </button>
    </div>
  );
}
