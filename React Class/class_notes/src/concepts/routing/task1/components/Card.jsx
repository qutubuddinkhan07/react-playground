import React from "react";

const Card = (props) => {
  // console.log(props)
  let { title, image } = props;
  return (
    <div className="border-2 rounded-lg w-75 p-3 flex flex-col gap-2">
      <img
        src={image}
        alt={title}
        width={200}
        height={100}
        className="w-full h-37.5 object-contain"
      />
      <h3 className="text-sm font-medium truncate">{title}</h3>
    </div>
  );
};

export default Card;
