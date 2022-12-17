import React from "react";

function License() {
  let links = [
    <a href="https://www.flaticon.com/free-icons/clock" title="clock icons">
      Clock icons created by Freepik - Flaticon
    </a>,
    <a href="https://www.flaticon.com/free-icons/home" title="home icons">
      Home icons created by Freepik - Flaticon
    </a>,
    <a href="https://www.flaticon.com/free-icons/brain" title="brain icons">
      Brain icons created by Freepik - Flaticon
    </a>,
    <a href="https://www.flaticon.com/free-icons/easy" title="easy icons">
      Easy icons created by Freepik - Flaticon
    </a>,
    <a href="https://www.flaticon.com/free-icons/coin" title="coin icons">
      Coin icons created by Freepik - Flaticon
    </a>,
    <a href="https://www.flaticon.com/free-icons/society" title="Society icons">
      Society icons created by Flat Icons - Flaticon
    </a>,
    <a href="https://www.flaticon.com/free-icons/people" title="people icons">
      People icons created by Freepik - Flaticon
    </a>,
    <a
      href="https://www.flaticon.com/free-icons/new-post"
      title="new post icons"
    >
      New post icons created by Freepik - Flaticon
    </a>,
    <a href="https://www.flaticon.com/free-icons/student" title="student icons">
      Student icons created by Freepik - Flaticon
    </a>,
    <a href="https://www.flaticon.com/free-icons/teacher" title="teacher icons">
      Teacher icons created by Freepik - Flaticon
    </a>,
    <a href="https://www.flaticon.com/free-icons/user" title="user icons">
      User icons created by Freepik - Flaticon
    </a>,
  ];
  return (
    <>
      <h1 className="heading">حقوق الصور</h1>
      <section className="container">
        {links.map((link, index) => (
          <div key={index}>{link}</div>
        ))}
        {/* <a href="https://www.flaticon.com/" title="flaticons">
      Icons created by Freepik - Flaticon
    </a> */}
      </section>
    </>
  );
}

export default React.memo(License);
