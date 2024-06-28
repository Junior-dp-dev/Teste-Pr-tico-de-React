import React from "react";
import logo from "../img/osure.png";

//Componente criado para facilitar seu uso, em outros dois componentes, para responsividade Navbar e Header

function Logo() {
  return (
    <button>
      <img src={logo} alt="Logo" className="inline-block w-[180px]" />
    </button>
  );
}

export default Logo;
