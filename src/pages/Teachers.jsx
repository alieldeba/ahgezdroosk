import axios from "axios";
import React from "react";
// import SubscriptionMessage from "../models/SubscriptionMessage";
import TeacherCard from "../components/TeacherCard";
import { Link } from "react-router-dom";

function Teachers() {
  const [search, setSearch] = React.useState("");
  const [getAllTeachers, setAllTeachers] = React.useState(null);

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

  function getTeachers(e) {
    e.preventDefault();

    if (!search) {
      setAllTeachers(null);
      return;
    }

    axios
      .get("https://mocki.io/v1/10c9e2bb-7709-455a-95f7-596d5aa8126b")
      .then((res) =>
        setAllTeachers(
          res.data.teachers.filter(
            (teacher) =>
              organizeWord(teacher.name).includes(organizeWord(search)) ||
              teacher.subject === organizeWord(search)
          )
        )
      );

    if (!getAllTeachers) {
      setAllTeachers(null);
    }
  }

  return (
    <main className="min-h-[calc(100vh-100px)]">
      <h1 className="heading">أبحث عن معلمك</h1>
      <section className="container mb-24">
        <form
          method="get"
          className="flex justify-center search"
          onSubmit={(e) => getTeachers(e)}
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
        {getAllTeachers &&
          getAllTeachers.map((teacher) => (
            <Link
              to={`/teachers/${teacher.id}`}
              className="cursor-pointer w-fit"
            >
              <TeacherCard
                name={teacher.name}
                subject={teacher.subject}
                img={teacher.img}
                key={teacher.name}
              />
            </Link>
          ))}
      </section>
    </main>
  );
}

export default React.memo(Teachers);
