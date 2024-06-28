import React from "react";
import backgroundImage from "../img/back.jpg";

//Imagem que vai no background da pagina
const Background = () => {
  {
    /*Com Tailwind configuro para que aparece sempre no centro da tela, cubra toda a tela e tenha a mesma altura da tela*/
  }
  return <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}></div>;
};

export default Background;
