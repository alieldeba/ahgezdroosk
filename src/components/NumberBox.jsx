import React from "react"

function NumberBox(props) {
  return (
    <p className="w-[50px] h-[50px] m-10 bg-primary flex justify-center items-center text-[#fff] text-2xl">
      {props.number}
    </p>
  );
}

export default React.memo(NumberBox)
