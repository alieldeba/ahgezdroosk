import React from "react";
import axios from "axios";
import Image from "next/image";
import GroupCard from "./GroupCard";

export const getStaticPaths = async () => {
  try {
    const res = await axios.get(
      "https://mocki.io/v1/10c9e2bb-7709-455a-95f7-596d5aa8126b"
    );
    const data = res.data;

    const paths = data.teachers.map((teacher) => {
      return {
        params: { id: teacher.id.toString() },
      };
    });

    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    console.error(error);
  }
};

export const getStaticProps = async (args) => {
  try {
    const id = args.params.id;
    const res = await axios.get(
      "https://mocki.io/v1/10c9e2bb-7709-455a-95f7-596d5aa8126b"
    );
    const data = res.data.teachers.filter((teacher) => teacher.id == id)[0];

    return {
      props: { teacher: data },
    };
  } catch (error) {
    console.error(error);
  }
};

function TeacherProfile({ teacher }) {
  return (
    <>
      <main className="relative">
        <div className="mb-20">
          <Image
            src="/images/cover.jpg"
            width={1920}
            height={1080}
            className="w-full h-60 object-cover"
          />
          <Image
            src={teacher.img}
            alt={teacher.name}
            width={150}
            height={150}
            className="rounded-full absolute right-5 top-40 object-cover h-[150px]"
          />
          <button className="btn-primary rounded-full absolute flex items-center justify-center left-5 h-5 mt-5">
            متابعة
          </button>
        </div>
        <section className="container">
          <h3 className="text-3xl">
            {teacher.name} - {teacher.subject}
          </h3>
        </section>
        <hr className="container my-24" />
        <h3 className="heading mt-0 pt-0">المجموعات</h3>
        <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {teacher.groups.map((group) => (
            <GroupCard title={group.name} open={group.isOpen} />
          ))}
        </section>
      </main>
    </>
  );
}

export default React.memo(TeacherProfile);
