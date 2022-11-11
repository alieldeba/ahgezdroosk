import React from "react";

function Error() {
  return (
    <div className="text-lg sm:text-2xl text-primary h-screen flex justify-center items-center">
      هذه الصفحة غير متوفرة | 404
    </div>
  );
}

export default React.memo(Error);
