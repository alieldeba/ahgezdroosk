import React from "react";

function License(props) {
  const { links } = props;
  return (
    <section>
      <h1 className="heading">حقوق الصور</h1>
      {links.map((link, index) => <div key={index}>{link}</div>)}
    </section>
  );
}

export default React.memo(License);
