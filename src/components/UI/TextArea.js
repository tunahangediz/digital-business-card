import classNames from "classnames";
import React from "react";

function TextArea({ className, ...props }) {
  return (
    <div className="w-full">
      <textarea
        className={classNames(
          "w-full border rounded-md border-[1px] border-blue-900 focus:border-blue-400 outline-none bg-[#111b28] p-2 text-white",
          className
        )}
        {...props}
      />
    </div>
  );
}

export default TextArea;
