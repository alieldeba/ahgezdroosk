import React from "react";

const TeacherDashboard = () => {
  return (
    <main className="flex-1 p-4 overflow-y-scroll">
      <h2 className="heading">المجموعات</h2>
      <div className="bg-white shadow-md rounded-md p-4">مجموعة 1</div>
      <div className="bg-white shadow-md rounded-md p-4 mt-4">مجموعة 2</div>
    </main>
  );
};

export default React.memo(TeacherDashboard);
