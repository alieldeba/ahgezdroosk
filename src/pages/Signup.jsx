import React from "react";
import { Link } from "react-router-dom";
const FuturesCard = React.lazy(() => import("../components/FuturesCard"));

function Signup() {
  return (
    <section>
      <h1 className="heading">أختر طريقة إنشاء حسابك</h1>
      <div className="flex flex-col md:flex-row mt-10 items-center justify-center">
        <Link
          to="/signup/student"
          className="text-3xl mb-5 md:ml-10 md:mb-0"
          title="طالب"
        >
          <FuturesCard img="/images/student.png" imgWidth="150" alt="طالب" />
        </Link>
        <Link to="/signup/teacher" className="text-3xl" title="معلم">
          <FuturesCard img="/images/teacher.png" imgWidth="150" alt="معلم" />
        </Link>
      </div>
    </section>
  );
}

export default React.memo(Signup);
