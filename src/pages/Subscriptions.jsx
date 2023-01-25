import React from "react";

function Subscriptions() {
  const plans = [
    {
      name: "الخطة الأساسية",
      price: 300,
      features: [
        "هناك حقيقة مثبتة",
        "هو ببساطة نص شكلي",
        "لوريم إيبسوم ليس نصاَ عشوائياً",
        "عاد لينتشر مرة أخرى",
        "لكن الغالبية تم تعديلها",
        "عام في القدم",
        " ليس هناك أي كلمات أو عبارات",
      ],
    },
    {
      name: "شركة ناشئة",
      price: 200,
      features: [
        "هناك حقيقة مثبتة",
        "هو ببساطة نص شكلي",
        "لوريم إيبسوم ليس نصاَ عشوائياً",
        "عاد لينتشر مرة أخرى",
        "لكن الغالبية تم تعديلها",
        "عام في القدم",
        " ليس هناك أي كلمات أو عبارات",
      ],
    },
    {
      name: "مَشرُوع",
      price: 60,
      features: [
        "هناك حقيقة مثبتة",
        "هو ببساطة نص شكلي",
        "لوريم إيبسوم ليس نصاَ عشوائياً",
        "عاد لينتشر مرة أخرى",
        "لكن الغالبية تم تعديلها",
        "عام في القدم",
        " ليس هناك أي كلمات أو عبارات",
      ],
    },
  ];

  return (
    <>
      <section className="py-14">
        <h3 className="heading">التسعير لجميع الباقات</h3>
        <div className="max-w-screen-xl mx-auto px-4 text-secondary md:px-8">
          <div className="mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
            {plans.map((item, idx) => (
              <div
                key={idx}
                className="relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2 border-[#e5e7eb] bg-white"
              >
                <div>
                  <span className="text-primary font-medium">{item.name}</span>
                  <div className="mt-4 text-dark text-3xl font-semibold">
                    {item.price} ج
                    <span className="text-xl text-dark font-normal">/شهر</span>
                  </div>
                </div>
                <ul className="py-8 space-y-3">
                  {item.features.map((featureItem, idx) => (
                    <li key={idx} className="flex items-center gap-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      {featureItem}
                    </li>
                  ))}
                </ul>
                <div className="flex-1 flex items-end">
                  <button className="btn-primary m-auto">إشترك الان</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default React.memo(Subscriptions);
