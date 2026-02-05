//src/components/Product/ProductDetail.jsx

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
      .catch(() => setLoading(false));
    }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <h4>Description:</h4>
      <p>{product.body}</p>

      <button onClick={() => navigate("/")}>
        Back to Main Page
      </button>
    </div>
  );
}
