import dynamic from "next/dynamic";
import React from "react";
const NumberBox = dynamic(() => import("./NumberBox"));

function UserManual() {
  return (
    <>
      <h1 className="heading">دليل الإستخدام</h1>
      <section className="container min-h-[calc(100vh-200px)]">
        <NumberBox number="1" />
        <h3 className="text-lg">
          الحجز يكون فى هذا الموقع لكن تأكيد الحجز يكون فى مقر المعلم
        </h3>
        <NumberBox number="2" />
        <h3 className="text-lg">
          التسجيل يكون بحساب واحد فقط ولا يصح التسجيل بعدة حسابات
        </h3>
        <NumberBox number="3" />
        <h3 className="text-lg">
          يجب إدخال معلوماتك الحقيقية عند إنشاء الحساب
        </h3>
      </section>
    </>
  );
}

export default React.memo(UserManual);
