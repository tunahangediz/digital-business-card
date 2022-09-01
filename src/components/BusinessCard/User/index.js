import React from "react";
import Avatar from "../../Avatar/Avatar";
import UserInfo from "./UserInfo";

function User({ values }) {
  return (
    <div>
      <div className="w-full  flex justify-center">
        <Avatar className="w-32 rounded-full" src="/images/img.png" />
      </div>
      <UserInfo values={values} />
    </div>
  );
}

export default User;
