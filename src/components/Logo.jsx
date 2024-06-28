import React from "react";
import logo from "../img/osure.png";

function Logo() {
  return (
    <button>
      <img src={logo} alt="Logo" className="inline-block w-[180px]" />
    </button>
  );
}

export default Logo;
