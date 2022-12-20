import React from "react";

function SubscriptionsCard(props) {
  return (
    <article className="w-[250px] h-[350px] text-center bg-[#fff] flex flex-col justify-between relative">
      <div>
        <h3 className="text-xl text-primary p-5">{props.title}</h3>
        <hr />
      </div>
      <div className="flex flex-col justify-between h-1/2">
        <p className="text-xl">{props.students} طالب</p>
        <p className="text-xl">{props.groups} مجموعات</p>
        <div>
          <del>300 ج.م/شهرياً</del>
          <p className="text-xl">{props.price} ج.م/شهرياً</p>
        </div>
      </div>
      <button className="px-6 py-3 duration-150 bg-success text-[#fff] active:shadow-lg">
        إشترك الآن
      </button>
    </article>
  );
}

export default React.memo(SubscriptionsCard);
