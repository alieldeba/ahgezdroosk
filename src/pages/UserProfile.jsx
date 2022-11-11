import React from "react";
const License = React.lazy(() => import("../components/License"));

function UserProfile() {
  return (
    <>
      <section>
        <h1 className="heading">الصفحة الشخصية</h1>
        <img
          src="/images/user.png"
          alt="user"
          loading="lazy"
          className="rounded-full m-auto mb-5"
          width={100}
        />
      </section>
      <License
        links={[
          <a href="https://www.flaticon.com/free-icons/user" title="user icons">
            User icons created by Freepik - Flaticon
          </a>,
        ]}
      />
    </>
  );
}

export default React.memo(UserProfile);
