import React from "react";
const FuturesCard = React.lazy(() => import("../components/FuturesCard"));
const License = React.lazy(() => import("../components/License"));

function AdminDashboard() {
  return (
    <>
      <section>
        <h1 className="heading">أهلا بك أيها المعلم</h1>
        <main className="flex flex-col sm:flex-row justify-center items-center h-[calc(100vh_-_75px)] sm:h-[calc(100vh_-_100px)] md:h-[calc(100vh_-_150px)] ">
          <div className="cursor-pointer ml-0 mb-10 sm:ml-10 sm:mb-0">
            <FuturesCard img="/images/groups.png" imgWidth="150" alt="groups" />
          </div>
          <div className="cursor-pointer">
            <FuturesCard img="/images/users.png" imgWidth="150" alt="users" />
          </div>
        </main>
      </section>
      <License
        links={[
          <a
            href="https://www.flaticon.com/free-icons/people"
            title="people icons"
          >
            People icons created by Freepik - Flaticon
          </a>,
          <a
            href="https://www.flaticon.com/free-icons/new-post"
            title="new post icons"
          >
            New post icons created by Freepik - Flaticon
          </a>,
        ]}
      />
    </>
  );
}

export default React.memo(AdminDashboard);
