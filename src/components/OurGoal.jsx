import React from "react";

function OurGoal() {
  return (
    <>
      <h3 className="heading">هدف المنصة</h3>
      <div className="bg-primary text-center py-10 text-[#fff]">
        <p>
          هدف المنصة هو تطوير التعليم فى مصر و سهولة إقامة المجموعات للمدرسين و سهولة
          الحجز للطلاب فيها
        </p>
      </div>
    </>
  );
}

export default React.memo(OurGoal);
