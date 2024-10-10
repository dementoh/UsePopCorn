import React from "react";

export default function SearchBar() {
  const [query, setQuery] = React.useState("");
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
