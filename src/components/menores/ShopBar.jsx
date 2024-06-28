import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import Account from "./Account";

//Componente criado para facilitar seu uso, em outros dois componentes, para responsividade Menu e Header
function ShopBar() {
  return (
    <button className="flex  items-center gap-6">
      <div className="hidden md:flex">
        <Account />
      </div>

      <FiShoppingCart className="text-3xl" />
    </button>
  );
}

export default ShopBar;
