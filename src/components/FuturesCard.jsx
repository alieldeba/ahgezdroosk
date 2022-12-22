import React from "react";

function FuturesCard(props) {
  return (
    <div className="p-5 w-full h-[220px] bg-[#e6e6e6] rounded-sm text-center m-auto">
      <img
        src={props.img}
        className="m-auto mb-2"
        alt={props.alt}
        width={props.imgWidth || 50}
        loading="lazy"
      />
      <h3 className="text-xl mb-1">{props.title}</h3>
      <p className="text-secondary">{props.desc}</p>
    </div>
  );
}

export default React.memo(FuturesCard);
