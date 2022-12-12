import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="flex justify-evenly h-screen items-center">
      <Link to="/signup/student" className="text-3xl">
        student
      </Link>
      <Link to="/signup/teacher" className="text-3xl">
        teacher
      </Link>
    </div>
  );
}

export default React.memo(Signup);
