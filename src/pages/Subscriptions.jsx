import React from "react";
const SubscriptionsCard = React.lazy(() =>
  import("../components/SubscriptionsCard")
);

function Subscriptions() {
  return (
    <>
      <h1 className="heading">أختر خطتك</h1>
      <section className="container h-[calc(100vh-200px)]">
        <div className="flex justify-center gap-24 mb-10">
          <button className="px-6 py-3 duration-150 bg-success text-[#fff] active:shadow-lg">
           سنوياً
          </button>
          <button className="px-6 py-3 duration-150 bg-success text-[#fff] active:shadow-lg">
           شهرياً
          </button>
        </div>
        <div className="flex flex-row-reverse items-center justify-center gap-5">
          <SubscriptionsCard
            title="أقل قيمة"
            students={50}
            groups={3}
            price={200}
          />
          <SubscriptionsCard
            title="أفضل قيمة"
            students={200}
            groups={5}
            price={500}
          />
          <SubscriptionsCard
            title="أعلى قيمة"
            students="∞"
            groups="∞"
            price={1000}
          />
        </div>
      </section>
    </>
  );
}

export default React.memo(Subscriptions);
