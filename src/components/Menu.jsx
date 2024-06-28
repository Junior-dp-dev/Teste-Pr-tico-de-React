import React, { useState } from "react";
import categories from "../categories.json";

function Menu() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCategory(index);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <nav className="w-full bg-slate-900 h-12 shadow-lg items-center justify-around font-roboto hidden md:flex">
      {categories.map((category, index) => (
        <div onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} className="relative cursor-pointer">
          <p className={`font-bold text-2xl h-12 flex items-center px-4 ${hoveredCategory === index ? " bg-red-500 text-white" : "text-white hover:bg-red-500 hover:text-white"}`}>{category.name}</p>
          {hoveredCategory === index && (
            <div className="absolute top-full left-0 bg-white text-black pt-2 pl-2 pr-32 shadow-lg flex flex-wrap">
              {category.subcategories.map((subcategory) => (
                <div className="mr-4 mb-4">
                  {subcategory.title ? (
                    <div className="mb-2 grid-cols-2 gap-4">
                      <p className="text-2xl font-bold">{subcategory.title}</p>
                    </div>
                  ) : (
                    <p className="text-2xl hover:text-red-500">{subcategory.name}</p>
                  )}
                  {subcategory.subcategories && (
                    <div className="mt-2 ">
                      {subcategory.subcategories.map((subsubcategory) => (
                        <p className="text-2xl hover:text-red-500">{subsubcategory.name}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}

export default Menu;
