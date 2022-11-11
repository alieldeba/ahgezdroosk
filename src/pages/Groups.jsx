import { lazy } from "react";
const GroupCard = lazy(() => import("../components/GroupCard"));

export default function Groups() {
  return (
    <section>
      <h1 className="heading">المجموعات</h1>
    </section>
  );
}
