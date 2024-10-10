import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NumResult from "./NumResult";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBar />
      <NumResult />
    </nav>
  );
}
