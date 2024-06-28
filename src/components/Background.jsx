import React from "react";
import backgroundImage from "../img/back.jpg";

const Background = () => {
  return <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}></div>;
};

export default Background;
