import React from "react";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";
const TeacherCard = dynamic(() => import("./TeacherCard"));

function Teachers({ initialTeachers }) {
  const [search, setSearch] = React.useState("");
  const [allTeachers, setAllTeachers] = React.useState(initialTeachers);
  const [showTeachers, setShowTeachers] = React.useState(false);

  // replaces some characters in word with other characters
  function organizeWord(word) {
    const replacementMap = {
      أ: "ا",
      إ: "ا",
      ى: "ي",
    };
    return word.replace(/[أإى]/g, function (match) {
      return replacementMap[match];
    });
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      "https://mocki.io/v1/10c9e2bb-7709-455a-95f7-596d5aa8126b"
    );
    const teachers = response.data.teachers.filter(
      (teacher) =>
        organizeWord(teacher.name).includes(organizeWord(search)) ||
        teacher.subject === organizeWord(search)
    );
    setAllTeachers(teachers);
    setShowTeachers(true);
  };

  return (
    <>
      <Head>
        <title>معلمين منصة أحجز دروسك - منصة أحجز دروسك التعليمية</title>
      </Head>
      <main className="min-h-[calc(100vh-100px)]">
        <h1 className="heading">أبحث عن معلمك</h1>
        <section className="container mb-24">
          <form
            method="get"
            className="flex justify-center search"
            onSubmit={handleSearch}
          >
            <div className="w-full md:w-[500px] lg:w-[800px] relative">
              <input
                type="text"
                name="name"
                className="w-full p-3 pl-24 rtl"
                placeholder="مثال: يوسف أحمد"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn-primary max-w-[80px] absolute left-2 py-1 px-5 top-1/2 -translate-y-1/2">
                بحث
              </button>
            </div>
          </form>
        </section>
        <section className="container teachers text-center">
          {showTeachers &&
            allTeachers.map((teacher) => (
              <Link href={`/teachers/${teacher.id}`} key={teacher.name}>
                <a className="cursor-pointer w-fit">
                  <TeacherCard
                    name={teacher.name}
                    subject={teacher.subject}
                    img={teacher.img}
                  />
                </a>
              </Link>
            ))}
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get(
    "https://mocki.io/v1/10c9e2bb-7709-455a-95f7-596d5aa8126b"
  );
  const initialTeachers = response.data.teachers;
  return {
    props: { initialTeachers },
  };
}

export default React.memo(Teachers);
