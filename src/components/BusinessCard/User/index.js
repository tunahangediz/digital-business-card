import React from "react";
import Avatar from "../../Avatar/Avatar";
import UserInfo from "./UserInfo";

function User({ values }) {
  return (
    <div>
      {values.imageActive && (
        <div className="w-full  flex justify-center">
          <Avatar
            src={values.image}
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
      )}
      <UserInfo values={values} />
    </div>
  );
}

export default User;
