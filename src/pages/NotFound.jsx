import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  function historyBack() {
    navigate(-1);
  }

  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto space-y-3 text-center">
          <img src="/images/logo.png" alt="احجز دروسك" width={100} />
          <h3 className="text-4xl font-semibold sm:text-5xl">
            الصفحة غير موجودة
          </h3>
          <p className="text-secondary">
            عذرا، الصفحة التي تبحث عنها لا يمكن العثور عليها أو قد تم إزالتها.
          </p>
          <button className="btn-primary m-auto" onClick={historyBack}>
            عُد إلى الخلف
          </button>
        </div>
      </div>
    </main>
  );
}

export default React.memo(NotFound);
