import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Account from "./Account";
import ShopBar from "./ShopBar";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import CategoriesLinks from "./CategoriesLinks";

function Navbar() {
  // Usei usestate para abrir e fechar o menu mobile
  const [open, setOpen] = useState(false);

  return (
    <>
      {/*Telas grandes*/}
      <div className=" md:flex hidden font-roboto h-14 w-full bg-slate-900 text-white items-center text-2xl font-medium gap-20 justify-center">
        {/*Usando o componente link que mapeia o arquivo JSON E exibe seu conteuro*/}

        <CategoriesLinks />
      </div>

      {/*Mobile*/}
      <div className="md:hidden">
        {/*Header*/}
        <div className="flex items-center justify-between px-5">
          {/*usando o onClick altero o icone para menu e close*/}
          <div onClick={() => setOpen(!open)}>{open ? <IoClose className="text-3xl" /> : <IoMenu className="text-3xl" />}</div>
          <Logo />
          <ShopBar />
        </div>

        {/*SearchBar*/}
        <div className="flex justify-around px-5 pb-2">
          <SearchBar />
        </div>

        {/*NavBox*/
        /*Com a verificação do useSate também altero quando o menu deve aparecer em sincronia com o botão de fechar abrir*/}
        <div className={`md:hidden duration-500 ${open ? "left-0" : "left-[-100%]"} absolute text-white bg-slate-900 inline-block items-center text-2xl font-medium px-4 py-2 w-80`}>
          <div className="bg-white text-black p-2 rounded-full cursor-pointer">
            <Account />
          </div>
          <CategoriesLinks />
        </div>
      </div>
    </>
  );
}

export default Navbar;
