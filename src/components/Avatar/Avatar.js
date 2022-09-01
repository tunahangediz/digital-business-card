import classNames from "classnames";
import React from "react";

function Avatar({ className, src, ...props }) {
  return <img className={classNames(className)} src={src} {...props} />;
}

export default Avatar;
