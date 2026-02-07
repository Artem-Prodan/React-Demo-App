 import "../../style.css";

 export default function SearchInput({
    searchText,
    updateSearchText
  }) {
    return (
      <div className="search-bar">
          <input
        type="text"
        value={searchText}
        onChange={(e) => updateSearchText(e.target.value)}
        placeholder="Search..."
        className="search-input-field"
      />
      </div>
    );
  }
