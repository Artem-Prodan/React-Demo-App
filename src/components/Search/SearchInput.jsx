
import "../../style.css";

export default function SearchInput({
  searchText,
  updateSearchText
}) {
  return (
    <input
      type="text"
      value={searchText}
      onChange={(e) => updateSearchText(e.target.value)}
      placeholder="Search..."
    />
  );
}
