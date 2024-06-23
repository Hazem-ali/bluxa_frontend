import React from "react";
import Like from "../../common/like";
const ItemCard = ({ item, onLike }) => {
  const { imgSrc, brand, title, price, old_price, liked } = item;

  const divStyle = {
    backgroundImage: `url(${imgSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="rounded-2xl max-w-full overflow-hidden bg-white shadow-md ">
      <div className="">
        {/* Image */}
        <a href="">
          <div className=" h-48" style={divStyle}></div>
        </a>

        {/* Details */}
        <div className="flex flex-col px-4 py-3 w-full ">
          <span className="text-gray-400 uppercase text-sm">{brand}</span>
          <p className="text-lg font-bold block truncate capitalize md:w-72 w-52">
            {title}
          </p>

          <div className="flex items-center justify-between ">
            <div className="flex items-center">
              <p className="text-lg font-semibold my-3">${price}</p>

              {old_price && (
                <del>
                  <p className="text-sm text-gray-600 ml-2">${old_price}</p>
                </del>
              )}
            </div>
            <div className="flex items-center">
              <Like liked={liked} onLikeToggle={onLike} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
