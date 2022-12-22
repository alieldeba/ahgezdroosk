import React from "react";

function Teachers() {
  return (
    <main className="min-h-[calc(100vh-100px)]">
      <h1 className="heading">أبحث عن معلمك</h1>
      <section className="container">
        <form method="get" className="flex justify-center search">
          <div className="w-full md:w-[500px] lg:w-[800px] relative">
            <input type="text" name="name" className="w-full p-3 rtl" />
            <button className="btn-primary absolute left-2 py-1 px-5 top-1/2 -translate-y-1/2">
              بحث
            </button>
          </div>
        </form>
      </section>
      {/* <h3 className="heading">النتائج</h3>
      <section className="container">
      </section> */}
    </main>
  );
}

export default React.memo(Teachers);
