import React from "react";
import { lazy } from "react";

const FuturesCard = React.lazy(() => import("./FuturesCard"));

function Futures() {
  return (
    <section>
      <h3 className="heading mb-5">المميزات</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
          desc="لا تحتاج الى النزول من بيتك لحجز مكان ما فى هذا الدرس فقط احجز هنا"
        />
        <FuturesCard
          img="/images/thinking.png"
          alt="تفكير"
          title="التفكير"
          desc="ليس عليك التفكير بإستعجال خذ وقتك و احجز فى اى وقت تريده و فى اى مجموعة"
        />
        <FuturesCard
          img="/images/easy.png"
          alt="سهل"
          title="سهولة الإستخدام"
          desc="أحجز بسهولة فى هذا الموقع فقط لا تحتاج الى شرح كيفية الإستخدام او ما الى ذلك"
        />
        <FuturesCard
          img="/images/money.png"
          alt="نقود"
          title="أسعار مميزة"
          desc="منصة أحجز تقدم أفضل خدمة مقابل دفع المعلمين سعر بسيط سنوياً"
        />
        <FuturesCard
          img="/images/society.png"
          alt="ملتقى"
          title="ملتقى التجمعات"
          desc="منصة أحجز هى ملتقى لجميع المعلمين و الطلاب"
        />
      </div>
    </section>
  );
}

export default React.memo(Futures);
