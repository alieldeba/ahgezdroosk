import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import GroupCard from "../components/GroupCard";

function TeachersDetails(props) {
  const { id } = useParams();

  const [selectedTeacher, setSelectedTeacher] = React.useState(null);

  React.useEffect(() => {
    axios
      .get("https://mocki.io/v1/22dc52f4-4099-4f98-8cd9-de6c67afdff3")
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
            <img src="/images/cover.jpg" className="w-full h-60 object-cover" />
            <img
              src="https://via.placeholder.com/150"
              alt={selectedTeacher.name}
              className="rounded-full absolute right-5 top-40"
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
          <h3 className="heading">المجموعات</h3>
          <section className="container">
            {selectedTeacher.groups.map((group) => (
              <GroupCard title={group.name} open={group.isOpen} />
            ))}
          </section>
        </main>
      ) : (
        ""
      )}
    </>
  );
}

export default React.memo(TeachersDetails);
