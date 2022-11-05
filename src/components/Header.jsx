export default function Header() {
  return (
    <nav className="flex justify-center items-center h-[50px] bg-white fixed w-full z-[9999]">
      <ul className="w-full h-full flex justify-center items-center container">
        <li className="cursor-pointer mx-5">
          <a href="/home">القائمة الرئيسية</a>
        </li>
        <li className="cursor-pointer mx-5">
          <a href="/groups">المجموعات</a>
        </li>
        <li className="cursor-pointer mx-5">
          <a href="/profile">الملف الشخصى</a>
        </li>
      </ul>
    </nav>
  );
}
