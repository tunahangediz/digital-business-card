import classNames from "classnames";
import React from "react";

function Button({ className, onClick, ...props }) {
  return (
    <div
      type={props.type || "button"}
      className={classNames("bg-white rounded-md p-2 ", className)}
      onClick={onClick}
      {...props}
    >
      {props.children}
    </div>
  );
}

export default Button;
