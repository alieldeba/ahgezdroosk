import React from "react";
import Image from "next/image";

function TeamCard(props) {
  return (
    <div className="bg-primarysoft text-white rounded-sm p-5 m-auto w-[200px] h-[210px] mb-5 xl:mb-0">
      <Image
        src={props.img}
        alt={props.name}
        className="rounded-full m-auto object-cover w-24 h-24 mb-2"
        width={96}
        height={96}
      />
      <h4 className="mb-2 text-xl">{props.name}</h4>
      <p>{props.job}</p>
    </div>
  );
}

export default React.memo(TeamCard);
