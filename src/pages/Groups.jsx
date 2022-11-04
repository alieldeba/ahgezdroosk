import GroupCard from "../components/GroupCard";

export default function Groups() {
  return (
    <>
      <h1 className="text-center text-2xl p-10">المجموعات</h1>
      {/* Groups section */}
      <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <GroupCard title="مجموعة عبد العال حد و اربع الساعة اربعة للصف الثالث الإعدادى" />
        <GroupCard title="مجموعة عبد العال حد و اربع الساعة اربعة للصف الثالث الإعدادى" />
        <GroupCard title="مجموعة عبد العال حد و اربع الساعة اربعة للصف الثالث الإعدادى" />
        <GroupCard title="مجموعة عبد العال حد و اربع الساعة اربعة للصف الثالث الإعدادى" />
        <GroupCard title="مجموعة عبد العال حد و اربع الساعة اربعة للصف الثالث الإعدادى" />
        <GroupCard title="مجموعة عبد العال حد و اربع الساعة اربعة للصف الثالث الإعدادى" />
        <GroupCard title="مجموعة عبد العال حد و اربع الساعة اربعة للصف الثالث الإعدادى" />
      </div>
    </>
  );
}
