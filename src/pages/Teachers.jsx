import axios from "axios";
import React from "react";
// import SubscriptionMessage from "../models/SubscriptionMessage";
import TeamCard from "../components/TeamCard";
import { Link } from "react-router-dom";

function Teachers() {
  const [search, setSearch] = React.useState("");
  const [getAllTeachers, setAllTeachers] = React.useState(null);

  function getTeachers(e) {
    e.preventDefault();

    if (!search) {
      setAllTeachers(null);
      return;
    }

    axios
      .get("https://mocki.io/v1/22dc52f4-4099-4f98-8cd9-de6c67afdff3")
      .then((res) =>
        setAllTeachers(
          res.data.teachers.filter(
            (teacher) =>
              teacher.name.includes(search) || teacher.subject.includes(search)
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
      <section className="container">
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
      <section className="container teachers mt-24">
        {getAllTeachers &&
          getAllTeachers.map((teacher) => (
            <Link to={`/teachers/${teacher.id}`} className="cursor-pointer">
              <TeamCard
                name={teacher.name}
                job={teacher.subject}
                img="https://via.placeholder.com/150"
                key={teacher.name}
              />
            </Link>
          ))}
      </section>
    </main>
  );
}

export default React.memo(Teachers);
