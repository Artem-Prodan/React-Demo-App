//src/components/Search/SearchInput.jsx
import "../../style.css";

export default function SearchInput({
  searchText,
  updateSearchText,
  executeSearch,
}) {

  const handleChange = (event) =>{
    updateSearchText(event.target.value);
  };

  const handleSubmit = (event) =>{
    event.preventDefault()
    executeSearch()
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text"
      value={searchText}
      onChange={handleChange}
      placeholder="Search..."/>
      <button type="submit">Find</button>
    </form>
  )
}