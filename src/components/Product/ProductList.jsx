//src/components/Product/ProductList.jsx
import ProductCard from "./ProductCard";

const ProductList = ({results}) =>{
  return(
    <div>
      {results.map((product)=>(
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  )
}

export default ProductList;