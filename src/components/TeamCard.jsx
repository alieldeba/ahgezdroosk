import React from "react";

function TeamCard(props) {
  return (
    <div className="bg-primarysoft text-white rounded-md p-5 m-auto w-[200px] h-[210px]">
      <img
        src={props.img}
        alt={props.name}
        className="rounded-full m-auto object-cover w-24 h-24 mb-2"
      />
      <h4 className="mb-2">{props.name}</h4>
      <p>{props.job}</p>
    </div>
  );
}

export default React.memo(TeamCard);
