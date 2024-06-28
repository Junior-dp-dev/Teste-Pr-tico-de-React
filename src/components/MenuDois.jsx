import React, { useState } from "react";
import Links from "./Links";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Account from "./Account";

function MenuDois() {
  return (
    <>
      <div className=" md:flex hidden font-roboto w-full bg-slate-900 text-white items-center text-2xl h-12 font-medium justify-around">
        <Links />
      </div>

      {/*Mobile*/}
      <div className="md:hidden">
        <div className="flex justify-between px-5">
          <Account />
          <Logo />
          <Account />
        </div>
        <div className="flex justify-around px-5">
          <SearchBar />
        </div>
        <div className="absolute text-white bg-slate-900 inline-block md:hidden items-center text-2xl font-medium py-2">
          <Links />
        </div>
      </div>
    </>
  );
}

export default MenuDois;
