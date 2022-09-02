import React from "react";
import removeHttp from "../../../utils/removeHttp";

function Footer({ socialLinks }) {
  return (
    <div className="w-full flex justify-around py-4 mt-4 bg-[#111b28]">
      {socialLinks.map((link) => {
        return link.active ? (
          <a
            href={"//" + link.url + link.username}
            target={"_blank"}
            noreferrer
          >
            <img src={`/images/${link.name}.svg`} alt="" />
          </a>
        ) : (
          ""
        );
      })}
    </div>
  );
}

export default Footer;
