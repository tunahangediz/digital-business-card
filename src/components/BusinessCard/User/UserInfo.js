import React from "react";
import removeHttp from "../../../utils/removeHttp";

function UserInfo({ values }) {
  return (
    <div className="w-full flex flex-col  items-center mt-3 gap-1">
      <h1 className="text-white text-3xl font-semibold">{values.name}</h1>
      <p className="text-[#F3BF99] text-sm">{values.profession}</p>
      {values.personalWebsite ? (
        <a
          className="text-gray-300 flex gap-2"
          target={"_blank"}
          href={"//" + removeHttp(values.personalWebsite)}
        >
          {removeHttp(values.personalWebsite)}
          <img
            className="w-3"
            style={{ color: "red" }}
            src="/images/arrow.svg"
            alt=""
          />
        </a>
      ) : null}
    </div>
  );
}

export default UserInfo;
