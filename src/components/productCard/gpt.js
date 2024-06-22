import React from "react";
import electronics from "../../images/electronics.jpg";

const ProductCard = (props) => {
  const divStyle = {
    backgroundImage: `url(${electronics})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section className="flex justify-center items-center bg-gray-50">
      <div className="bg-white shadow-md hover:scale-110 duration-300">
        <a href="">
          <div
            className="w-72 h-48 transition-transform hover:scale-110"
            style={divStyle}
          ></div>
        </a>
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 uppercase text-sm">Brand</span>
          <p className="text-lg font-bold block truncate capitalize">
            product name
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold my-3">$149</p>
            <del>
              <p className="text-sm text-gray-600 ml-2">$199</p>
            </del>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;