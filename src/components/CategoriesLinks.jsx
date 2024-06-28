import React from "react";

// Importa os dados do JSON onde estão as categorias e subcategorias
import categorias from "../categoriesDois.json";

function CategoriesLinks() {
  return (
    <>
      {/*Faz um map para percorer todos os dados do JSON*/}
      {categorias.map((categoria) => (
        <div>
          <div className="uppercase text-left md:cursor-pointer group md:hover:bg-red-500">
            {/*Exibe todos os nomes que foram percorridos no JSOM*/}
            <h1 className="h-14 flex items-center whitespace-nowrap">{categoria.name}</h1>
            {categoria.submenu && (
              <div>
                <div className="absolute top-[8.5rem] hidden group-hover:md:block hover:md:block">
                  <div className="bg-slate-900 p-4 grid grid-cols-3 gap-10">
                    {categoria.sublinks.map((mysublinks) => (
                      <div>
                        <h1 className="text-lg font-semibold">{mysublinks.Head}</h1>
                        {mysublinks.sublink.map((slink) => (
                          <p className="hover:text-red-500 text-sm text-gray-400 my-2.5">{slink.name}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/*Mobile*/}
          <div className="md:hidden">
            {categoria.sublinks.map((slinks) => (
              <div>
                <h1 className="py-4 pl-7 font-semibold md:pr-0 pr-5">{slinks.Head}</h1>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default CategoriesLinks;
