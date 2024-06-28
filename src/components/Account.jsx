import React from "react";
import { FiShoppingBag } from "react-icons/fi";

function Account() {
  return (
    <button className="flex  items-center gap-3">
      <p className="hidden md:flex">MINHA CONTA</p>
      <FiShoppingBag className="text-3xl" />
    </button>
  );
}

export default Account;
