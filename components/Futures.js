import React from "react";
import {motion} from "framer-motion"
import { textSlideVariant } from "../variants/textVariants";
import FuturesCard from "./FuturesCard";

function Futures() {
  return (
    <>
      <motion.h3
        className="heading"
        variants={textSlideVariant}
        initial="hidden"
        whileInView="visible"
      >
        المميزات
      </motion.h3>
      <section className="container">
        <div className="grid futures gap-10">
          <FuturesCard
            img="/images/easy.png"
            alt="سهل"
            title="سهولة الإستخدام"
            desc="أحجز بسهولة فى هذا الموقع فقط لا تحتاج الى شرح كيفية الإستخدام او ما الى ذلك"
          />
          <FuturesCard
            img="/images/clock.png"
            alt="ساعة"
            title="السرعة"
            desc="أحجز سريعا من هذا الموقع الإلكترونى بدلا من تضييع الوقت فى الذهاب الى الدرس "
          />
          <FuturesCard
            img="/images/home.png"
            alt="بيت"
            title="من بيتك"
            desc="لا تحتاج الى النزول من بيتك لحجز مكان ما فى الدرس. فقط احجز من هنا"
          />
          <FuturesCard
            img="/images/money.png"
            alt="نقود"
            title="أسعار مميزة"
            desc="منصة أحجز تقدم أفضل خدمة مقابل دفع المعلمين سعر بسيط شهرياً أو سنوياً"
          />
          <FuturesCard
            img="/images/thinking.png"
            alt="تفكير"
            title="التفكير"
            desc="ليس عليك التفكير بإستعجال خذ وقتك و احجز فى اى وقت تريده و فى اى مجموعة"
          />
          <FuturesCard
            img="/images/management.png"
            alt="الإدارة"
            title="الإدارة المتكاملة"
            desc="يمكن للمعلمين التحكم في المجموعات، التحقق من الطلاب الذين ينضمون إلى مجموعاتهم، تعديل المجموعات، و غيرها."
          />
          <FuturesCard
            img="/images/society.png"
            alt="ملتقى"
            title="ملتقى التجمعات"
            desc="منصة أحجز دروسك هى ملتقى لجميع المعلمين و الطلاب"
          />
        </div>
      </section>
    </>
  );
}

export default React.memo(Futures);
