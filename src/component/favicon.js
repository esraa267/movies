import React from "react";

export default function FavIcon(props) {
  return (
    <i
      className={`fa fa-star fs-1 ${props.color} `}
      onClick={() => {
        props.addtofav(props.movie);
      }}
    ></i>
  );
}
