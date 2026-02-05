//src/components/Search/Suggestion.jsx
export default function Suggestion({
  suggestions,
  onSuggestionClick
}) {
  return(
    <ul>
      {suggestions.map((product)=>(
          <li
            key={product.id}
            onClick={()=>onSuggestionClick(product)}>
            <span>{product.title}</span>
          </li>
      ))}
    </ul>
  )
}