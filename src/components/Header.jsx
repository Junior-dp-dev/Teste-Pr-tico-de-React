import React from "react";
import logo from "../img/osure.png";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

function Header() {
  return (
    <div className="w-full bg-white h-20 flex items-center justify-around font-oswald">
      <div className="w-[260px] py-1 px-2 rounded-full border border-slate-900 flex items-center gap-2">
        <button className="p-3 border border-slate-900 rounded-full">
          <FaSearch />
        </button>
        <form className=" relative">
          <div className="relative">
            <input type="search" placeholder="O que vc procura?" className="w-full p-3 rounded-full " onChange={(e) => handleSearch(e)} />
          </div>
        </form>
      </div>
      <button>
        <img src={logo} alt="Logo" className="inline-block w-[180px]" />
      </button>
      <div className="w-[260px] py-1 px-2 rounded-full  flex items-center gap-2 hidden md:flex">
        <button>MINHA CONTA</button>
        <FiShoppingBag className="text-3xl" />
      </div>
    </div>
  );
}

export default Header;
