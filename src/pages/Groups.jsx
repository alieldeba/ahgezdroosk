import React from "react";
const GroupCard = React.lazy(() => import("../components/GroupCard"));

function Groups() {
  return (
    <section>
      <h1 className="heading">المجموعات</h1>
    </section>
  );
}

export default React.memo(Groups)
