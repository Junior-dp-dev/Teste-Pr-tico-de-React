import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Account from "./Account";

function Header() {
  return (
    <div className="hidden md:flex w-full bg-white h-20 items-center justify-around font-oswald">
      <SearchBar />
      <Logo />
      <Account />
    </div>
  );
}

export default Header;
