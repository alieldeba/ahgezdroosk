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
      </div>
    </section>
  );
}

export default React.memo(Futures)
