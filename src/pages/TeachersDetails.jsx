import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import GroupCard from "../components/GroupCard";
import Loader from "../components/Loader";

function TeachersDetails() {
  const { id } = useParams();

  const [selectedTeacher, setSelectedTeacher] = React.useState(null);

  React.useEffect(() => {
    axios
      .get("https://mocki.io/v1/10c9e2bb-7709-455a-95f7-596d5aa8126b")
      .then((res) =>
        setSelectedTeacher(
          res.data.teachers.filter((teacher) => teacher.id == id)[0]
        )
      );

    if (!selectedTeacher) setSelectedTeacher(null);
  }, []);

  console.log(selectedTeacher);

  return (
    <>
      {selectedTeacher ? (
        <main className="relative">
          <div className="mb-20">
            <img
              src="/images/cover.jpg"
              className="w-full h-60 object-cover"
              loading="lazy"
            />
            <img
              src={selectedTeacher.img}
              alt={selectedTeacher.name}
              width={150}
              loading="lazy"
              className="rounded-full absolute right-5 top-40 object-cover h-[150px]"
            />
            <button className="btn-primary rounded-full absolute flex items-center justify-center left-5 h-5 mt-5">
              متابعة
            </button>
          </div>
          <section className="container">
            <h3 className="text-3xl">
              {selectedTeacher.name} - {selectedTeacher.subject}
            </h3>
          </section>
          <hr className="container my-24" />
          <h3 className="heading mt-0 pt-0">المجموعات</h3>
          <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {selectedTeacher.groups.map((group) => (
              <GroupCard title={group.name} open={group.isOpen} />
            ))}
          </section>
        </main>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default React.memo(TeachersDetails);
