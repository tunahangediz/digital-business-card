import React from "react";

function CheckBox({ onChange, ...props }) {
  return (
    <div class="flex items-center mb-4">
      <input
        id={props.id}
        onChange={onChange}
        type="checkbox"
        value={props.value}
        {...props}
      />
      <label
        for={props.id}
        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {props.label}
      </label>
    </div>
  );
}

export default CheckBox;
