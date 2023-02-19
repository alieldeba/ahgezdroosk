import React from "react";

function GroupCard(props) {
  return (
    <article className="mt-4 p-5 w-80 bg-dark text-white shadow-lg h-48 flex justify-center items-center cursor-pointer">
        <h3 className="text-xl text-center">{props.title}</h3>
    </article>
  );
}

export default React.memo(GroupCard);
