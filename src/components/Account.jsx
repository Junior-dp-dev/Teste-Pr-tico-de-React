import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";

//Componente criado para facilitar seu uso, em outros dois componentes, para responsividade Navbar e ShopBar
function Account() {
  return (
    <div className="flex justify-center items-center gap-1">
      <MdOutlineAccountCircle className="text-3xl" />
      <p>MINHA CONTA</p>
    </div>
  );
}

export default Account;
