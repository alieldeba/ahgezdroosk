import React from "react";
import Head from "next/head";

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
    <Head>
    <title>الإشتراكات فى المنصة - منصة أحجز دروسك التعليمية</title>
    </Head>
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
                          clipRule="evenodd"
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

/*
<div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8"><div class="relative max-w-xl mx-auto sm:text-center"><h3 class="text-gray-800 text-3xl font-semibold sm:text-4xl">التسعير لجميع الباقات</h3><div class="mt-3 max-w-xl"><p>العميل مهم جدا ، العميل سيتبعه. لا توجد نتيجة الآن.</p></div></div><div class="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3"><div class="relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 "><div class="p-8 space-y-4 border-b"><span class="text-indigo-600 font-medium">الخطة الأساسية</span><div class="text-gray-800 text-3xl font-semibold">$12 <span class="text-xl text-gray-600 font-normal">/شهر</span></div><p>العميل مهم جدا، العميل سيتبعه.</p><button class="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700">دعنا نبدء</button></div><ul class="p-8 space-y-3"><li class="pb-2 text-gray-800 font-medium"><p>المميزات</p></li><li class="flex items-center gap-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>هناك حقيقة مثبتة</li><li class="flex items-center gap-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>هو ببساطة نص شكلي</li><li class="flex items-center gap-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>لوريم إيبسوم ليس نصاَ عشوائياً</li><li class="flex items-center gap-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>عاد لينتشر مرة أخرى</li><li class="flex items-center gap-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>لكن الغالبية تم تعديلها</li><li class="flex items-center gap-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>عام في القدم</li><li class="flex items-center gap-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> ليس هناك أي كلمات أو عبارات</li></ul></div><div class="relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 mt-10"><span class="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold">الأكثر شهرة</span><div class="p-8 space-y-4 border-b"><span class="text-indigo-600 font-medium">شركة نالشئة</span><div class="text-gray-800 text-3xl font-semibold">$35 <span class="text-xl text-gray-600 font-normal">/شهر</span></div><p>العميل مهم جدا، العميل سيتبعه.</p><button class="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700">دعنا نبدء</button></div><ul class="p-8 space-y-3"><li class="pb-2 text-gray-800 font-medium"><p>المميزات</p></li><li class="flex items-center gap-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>هناك حقيقة مثبتة</li><li class="flex items-center gap-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>هو ببساطة نص شكلي</li><li class="flex items-center gap-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>لوريم إيبسوم ليس نصاَ عشوائياً</li><li class="flex items-center gap-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>عاد لينتشر مرة أخرى</li><li class="flex items-center gap-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>لكن الغالبية تم تعديلها</li><li class="flex items-center gap-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>عام في القدم</li><li class="flex items-center gap-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> ليس هناك أي كلمات أو عبارات</li></ul></div><div class="relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 "><div class="p-8 space-y-4 border-b"><span class="text-indigo-600 font-medium">مَشرُوع</span><div class="text-gray-800 text-3xl font-semibold">$60 <span class="text-xl text-gray-600 font-normal">/شهر</span></div><p>العميل مهم جدا، العميل سيتبعه.</p><button class="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700">دعنا نبدء</button></div><ul class="p-8 space-y-3"><li class="pb-2 text-gray-800 font-medium"><p>المميزات</p></li><li class="flex items-center gap-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>هناك حقيقة مثبتة</li><li class="flex items-center gap-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>هو ببساطة نص شكلي</li><li class="flex items-center gap-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>لوريم إيبسوم ليس نصاَ عشوائياً</li><li class="flex items-center gap-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>عاد لينتشر مرة أخرى</li><li class="flex items-center gap-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>لكن الغالبية تم تعديلها</li><li class="flex items-center gap-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>عام في القدم</li><li class="flex items-center gap-5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> ليس هناك أي كلمات أو عبارات</li></ul></div></div></div>
*/