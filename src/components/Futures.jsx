import { lazy } from "react";
const FuturesCard = lazy(() => import("./FuturesCard"));

export default function Futures() {
  return (
    <section>
      <h3 className="heading mb-5">المميزات</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <FuturesCard
          img="/images/clock.png"
          alt="clock"
          title="السرعة"
          desc="أحجز سريعا من هذا الموقع الإلكترونى بدلا من تضييع الوقت فى الذهاب الى الدرس "
        />
        <FuturesCard
          img="/images/home.png"
          alt="home"
          title="من بيتك"
          desc="لا تحتاج الى النزول من بيتك لحجز مكان ما فى هذا الدرس فقط احجز هنا"
        />
        <FuturesCard
          img="/images/thinking.png"
          alt="thinking"
          title="التفكير"
          desc="ليس عليك التفكير بإستعجال خذ وقتك و احجز فى اى وقت تريده و فى اى مجموعة"
        />
        <FuturesCard
          img="/images/easy.png"
          alt="easy"
          title="سهولة الإستخدام"
          desc="أحجز بسهولة فى هذا الموقع فقط لا تحتاج الى شرح كيفية الإستخدام او ما الى ذلك"
        />
      </div>
    </section>
  );
}
