import React from "react";
import categorias from "../categoriesDois.json";

function Links() {
  return (
    <>
      {categorias.map((categoria) => (
        <div className="px-3 text-left md:cursor-pointer">
          <p className="py-2">{categoria.name}</p>
        </div>
      ))}
    </>
  );
}

export default Links;
