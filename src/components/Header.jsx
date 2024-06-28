import React from "react";
import Logo from "./menores/Logo";
import SearchBar from "./menores/SearchBar";
import ShopBar from "./menores/ShopBar";

// Cabeçalho da tela usando componentes que serão reutilizados na parte mobile do projeto, no Header é usado em telas grandes
function Header() {
  return (
    <div className="hidden md:flex w-full bg-white h-20 items-center justify-around font-oswald">
      <SearchBar />
      <Logo />
      <ShopBar />
    </div>
  );
}

export default Header;
