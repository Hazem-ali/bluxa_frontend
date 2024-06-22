import React from "react";
import electronics from "../../images/electronics.jpg";
const ProductCard = (props) => {
  const divStyle = {
    backgroundImage: `url(${props.imgSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="rounded-2xl max-w-full overflow-hidden bg-white shadow-md hover:scale-105 duration-300">
      <div className="">
        <a href="">
          <div className=" h-48" style={divStyle}></div>
        </a>
        <div className="px-4 py-3 w-screen  ">
          <span className="text-gray-400 uppercase text-sm">Brand</span>
          <p className="text-lg font-bold block truncate capitalize md:w-72 w-52">
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
    </div>
  );
};

export default ProductCard;
