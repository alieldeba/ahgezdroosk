import React from "react";
import NumberBox from "../components/NumberBox";

export default function UserManual() {
  return (
    <>
      <section>
        <h1 className="heading">دليل الإستخدام</h1>
        <NumberBox number="1" />
        <h3 className="text-lg">
          الحجز يكون فى هذا الموقع لكن تأكيد الحجز يكون فى مقر المستر
        </h3>
        <NumberBox number="2" />
        <h3 className="text-lg">
          التسجيل يكون بحساب واحد فقط ولا يصح التسجيل بعدة حسابات
        </h3>
      </section>
    </>
  );
}
