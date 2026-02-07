
// Filters a list of products by title based on the searchText

export function searchRule(products, searchText){
  if (!Array.isArray(products)) return[];
  if (typeof searchText !== "string") return[];

  const normalizedText = searchText.trim().toLowerCase();

  if (normalizedText === "") return[];

  return products.filter((product) =>{
    if (!product || typeof product.title !== "string") return false;
      return product.title.toLowerCase().includes(normalizedText);
  })
}