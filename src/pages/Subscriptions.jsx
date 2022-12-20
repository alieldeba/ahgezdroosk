import React from "react";
const SubscriptionsCard = React.lazy(() =>
  import("../components/SubscriptionsCard")
);

function Subscriptions() {
  return (
    <>
      <h1 className="heading">أختر خطتك</h1>
      <section className="container min-h-[calc(100vh-200px)]">
        <div className="flex flex-row-reverse items-center justify-center gap-5 flex-wrap">
          <SubscriptionsCard
            title="أقل قيمة"
            students={300}
            groups={4}
            price={450}
          />
          <SubscriptionsCard
            title="أفضل قيمة"
            students={800}
            groups={7}
            offer={1000}
            price={800}
          />
          <SubscriptionsCard
            title="أعلى قيمة"
            students="∞"
            groups={20}
            offer={2000}
            price={1300}
          />
        </div>
      </section>
    </>
  );
}

export default React.memo(Subscriptions);
