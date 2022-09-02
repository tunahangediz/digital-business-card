import classNames from "classnames";
import React from "react";

function Avatar({ className, src, ...props }) {
  return (
    <img
      className={classNames(className)}
      src={src || "/images/avatar_placeholder.webp"}
      {...props}
    />
  );
}

export default Avatar;
