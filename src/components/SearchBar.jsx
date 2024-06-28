import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <>
      <div className="w-full md:w-[260px] py-1 px-2 rounded-full border border-slate-900 flex items-center gap-2">
        <button className="p-3 border border-slate-900 rounded-full">
          <FaSearch />
        </button>
        <form className=" relative">
          <div className="relative">
            <input type="search" placeholder="O que vc procura?" className="w-full p-3 rounded-full " onChange={(e) => handleSearch(e)} />
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
