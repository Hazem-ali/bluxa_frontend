import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";

import React from "react";

const Like = (props) => {
  const suitableIcon = props.liked ? (
    <FavoriteSharpIcon />
  ) : (
    <FavoriteBorderSharpIcon />
  );
  return (
    <div
      className="cursor-pointer transition-all hover:scale-125 duration-300 "
      onClick={props.onLikeToggle}
    >
      {suitableIcon}
    </div>
  );
};

export default Like;
