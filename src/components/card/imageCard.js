import React from "react";

const ImageCard = ({ children, imgSrc, ...rest }) => {
  return (
    <div
      {...rest}
      className="relative md:h-96 h-64 min-w-xs overflow-hidden bg-cover rounded-2xl shadow-lg group "
    >
      <img
        src={imgSrc}
        alt="image"
        className="transition-transform  group-hover:scale-110 duration-200"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t  from-black/60 to-transparent">
        <div className="p-4 text-white">{children}</div>
      </div>
    </div>
  );
};

export default ImageCard;
