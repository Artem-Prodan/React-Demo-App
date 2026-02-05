//src/components/EmptyState.jsx
const EmptyState = ({searchStatus}) =>{
  if (searchStatus === "waiting"){
    return <p>Start typing to search products</p>
  }

  if (searchStatus === "empty"){
    return <p>Please enter a product name</p>
  }

  if (searchStatus === "no results"){
    return <p>No products found</p>
  }

  return null;
}

export default EmptyState;