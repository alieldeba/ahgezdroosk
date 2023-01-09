import React from "react";
import SubscriptionMessage from "../models/SubscriptionMessage";

function Teachers() {
  return (
    <main className="min-h-[calc(100vh-100px)]">
      <h1 className="heading">أبحث عن معلمك</h1>
      <section className="container">
        <form
          method="get"
          className="flex justify-center search"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="w-full md:w-[500px] lg:w-[800px] relative">
            <input
              type="text"
              name="name"
              className="w-full p-3 rtl"
              placeholder="مثال : يوسف أحمد"
            />
            <button className="btn-primary max-w-[80px] absolute left-2 py-1 px-5 top-1/2 -translate-y-1/2">
              بحث
            </button>
          </div>
        </form>
      </section>
      <h3 className="heading">نتائج البحث</h3>
      <section className="container">
        <h5 className="text-center">لا يوجد نتائج للبحث</h5>
      </section>
    </main>
  );
}

export default React.memo(Teachers);
