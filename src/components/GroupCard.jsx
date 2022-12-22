import React from "react";

function GroupCard(props) {
  return (
    <article className="max-w-md mx-auto mt-4 p-5 shadow-lg bg-[#ddd] rounded-sm duration-300 hover:shadow-sm h-[400px] w-[300px] relative">
      <div className="pt-3 mr-4 ml-2 mb-3">
        <h3 className="text-xl">{props.title}</h3>
      </div>
      <p
        className={`absolute bottom-24 left-1/2 -translate-x-1/2 ${
          props.open === "true" ? "text-success" : "text-danger"
        } text-xl`}
      >
        {props.open === "true" ? "متاح" : "ممتلئ"}
      </p>
      <button className="btn-success absolute bottom-5 left-1/2 -translate-x-1/2">
        الإنضمام
      </button>
    </article>
  );
}

export default React.memo(GroupCard);
