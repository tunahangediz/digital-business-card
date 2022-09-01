import classNames from "classnames";
import React from "react";

function ContactLink({ children, href, className, ...props }) {
  return (
    <a
      className={classNames(
        "w-[115px] h-[34px] flex justify-center items-center gap-2 bg-white rounded-md",
        className
      )}
      target={"_blank"}
      href={href}
      {...props}
    >
      {children}
    </a>
  );
}

export default ContactLink;
