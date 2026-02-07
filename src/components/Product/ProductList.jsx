
import ProductCard from "./ProductCard";
import "../../style.css";

const ProductList = ({results}) =>{
  return(
    <div className="product-list-container">
      {results.map((product)=>(
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  )
}

export default ProductList;