import React from "react";
const GroupCard = React.lazy(() => import("../components/GroupCard"));

function Groups() {
  return (
    <section>
      <h1 className="heading">المجموعات</h1>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <GroupCard
          title="مجموعة مستر عبد العال حد و اربع الساعة خمسة"
          open="true"
        />
        <GroupCard
          title="مجموعة مستر عبد العال حد و اربع الساعة خمسة"
          open="false"
        />
        <GroupCard
          title="مجموعة مستر عبد العال حد و اربع الساعة خمسة"
          open="true"
        />
        <GroupCard
          title="مجموعة مستر عبد العال حد و اربع الساعة خمسة"
          open="false"
        />
      </main>
    </section>
  );
}

export default React.memo(Groups);
