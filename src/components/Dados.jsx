import React, { useState } from "react";
//Icones de seta pego do React icons
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

// Importa os dados do JSON onde estão as categorias e subcategorias
import dadosjson from "../dadosjson.json";

function Dados() {
  //Usando hooks para alterar entre expandir e contrair o menu, e mudar de icones
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {/*Faz um map para percorer todos os dados do JSON*/}
      {dadosjson.map((dados) => (
        <div>
          {/*Usando Tailwind para agrupar os menus e poder ocultar ou mostar eles*/}
          <div className="uppercase text-left cursor-pointer group hover:text-red-500 md:hover:text-white md:hover:bg-red-500 px-4">
            {/*Exibe todos os nomes que foram percorridos no JSOM*/}
            <h1
              className="h-14 flex items-center whitespace-nowrap justify-between"
              onClick={() => {
                heading !== dados.categoria ? setHeading(dados.categoria) : setHeading("");
                setSubHeading("");
              }}>
              {dados.categoria}
              <span className="md:hidden">{heading === dados.categoria ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
            </h1>

            <div className="absolute -translate-x-4 top-[8.5rem] hidden group-hover:md:block hover:md:block">
              {/*Verificação no Json se possui submenus, caso possua incluir nos menus*/}
              {dados.submenu ? (
                <div className="bg-slate-900 py-6 px-10 grid grid-cols-2 gap-10 ">
                  {dados.subcategorias.map((mSubcategorias) => (
                    <div>
                      <h1 className="text-lg font-semibold">{mSubcategorias.nome}</h1>
                      {mSubcategorias.subcategoria.map((mSubcategoria) => (
                        <p className="hover:text-red-500 text-sm text-gray-400 my-2.5">{mSubcategoria.nome}</p>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-slate-900 p-4 gap-10 ">
                  {dados.subcategorias.map((mSubcategoria) => (
                    <div>
                      <h1 className="text-lg font-semibold py-4 pr-14 hover:text-red-500">{mSubcategoria.nome}</h1>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/*Mobile*/
          /*Usando Tailwind para ocultar ou mostrar o menu conforme o click*/}
          <div className={`${heading === dados.categoria ? "md:hidden" : "hidden"}`}>
            {dados.subcategorias.map((mSubcategorias) => (
              <div>
                <h1
                  onClick={() => {
                    subHeading !== mSubcategorias.nome ? setSubHeading(mSubcategorias.nome) : setSubHeading("");
                  }}
                  className=" uppercase py-4 pl-7 font-light md:pr-0 pr-5 cursor-pointer hover:text-red-500 flex justify-between">
                  {mSubcategorias.nome}
                  <span className="md:hidden">{dados.submenu && (subHeading === mSubcategorias.nome ? <IoIosArrowUp /> : <IoIosArrowDown />)}</span>
                </h1>
                <div className={`${subHeading === mSubcategorias.nome ? "md:hidden" : "hidden"}`}>
                  {mSubcategorias.subcategoria.map((mSubcategoria) => (
                    <p className="uppercase font-extralight py-3 pl-14 cursor-pointer hover:text-red-500">{mSubcategoria.nome}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Dados;
