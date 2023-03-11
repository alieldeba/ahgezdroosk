import React from "react";
import {motion} from "framer-motion";
import { textShadeVariant, textSlideVariant } from "../variants/textVariants";

function FAQ() {
  const faqsList = [
    {
      q: "ما هى الإستفادة من هذه المنصة؟",
      a: "تتيح المنصة طريقة لحجز الطلاب فى مجموعات معلميها حيث انها تسهل الكثير على الطلاب ولا تجعلهم ينزلون من بيتهم و البحث عن مقر المعلم.",
    },
    {
      q: "كيف أبدا إستخدام المنصة؟",
      a: "إذا كنت طالباً فيمكنك إنشاء حساب طالب فى المنصة و البحث عن معلمك فى صفحة المعلمون و إذا كنت معلما فيمكنك أيضا إنشاء حساب معلم و إشتراك فى خطة شهرية.",
    },
    {
      q: "هل هذه المنصة مجانية؟",
      a: "للأسف هذه المنصة ليست مجانية و لكن سوف تكون مجانية فى الفترة الأولى من إنشائها لا يُشترط على الطالب دفع اى مبلغ للمنصة.",
    },
    {
      q: "كيف يمكننى التسجيل فى المنصة؟",
      a: "يمكنك إنشاء حساب فى المنصة او تسجيل الدخول إذا كان لديك حساب بالفعل و يجب تحديد إذا كنت طالب او معلم قبل إنشاء او تسجيل الدخول إلى حساب.",
    },
    {
      q: "كيف تضمن المنصة خصوصية و أمن معلومات الطلاب و المعلمين؟",
      a: "تضمن المنصة جميع خصوصيات مستخدميها حيث انها تشفر جميع كلمات المرور التى تكتب فيها و يجب عليك تأكيد هويتك قبل فعل اى شئ فى الموقع ولا يوجد اى هجمات على الموقع فجميع خصوصياتك آمنه.",
    },
    {
      q: "هل يمكن للمعلمين التفاعل مع الطلاب فى الموقع؟",
      a: "للأسف لا يمكن فهذا الموقع مخصص فقط لحجز الطلاب فى مجموعات معلميهم ولكن هذه المنصة فى تطور مستمر و من المتوقع تفعيل هذه الميزة.",
    },
  ];

  return (
    <>
      <motion.h1
        className="heading"
        variants={textSlideVariant}
        initial="hidden"
        whileInView="visible"
      >
        الأسئلة الشائعة
      </motion.h1>
      <section className="leading-relaxed max-w-screen-xl mx-auto px-4 lg:px-8 pb-24">
        <div className="mt-14 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {faqsList.map((item, idx) => (
            <motion.div className="space-y-3 mt-5" key={idx}
            variants={textShadeVariant}
            initial="hidden"
            whileInView="visible"
            >
              <h4 className="text-xl font-medium">{item.q}</h4>
              <p className="text-dark">{item.a}</p>
              <hr className="sm:hidden" />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
export default React.memo(FAQ);
