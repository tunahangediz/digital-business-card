import React from "react";
import Avatar from "../../../Avatar/Avatar";

function ImageInput({ setFieldValue, ...props }) {
  const handleChange = (e) => {
    console.log(props.formik.values);
    if (e.target.files[0]) {
      let img = e.target.files[0];
      setFieldValue("image", URL.createObjectURL(img));
    }
  };
  return (
    <div className=" flex flex-col gap-4">
      <label
        className="h-12 text-md rounded-md flex items-center justify-center hover:border-blue-400 cursor-pointer bg-[#111b28] border-blue-900 border "
        for="file"
      >
        Choose Photo
        <input
          className=""
          onChange={handleChange}
          id="file"
          type="file"
          accept="image/*"
          hidden
        />
      </label>
      <div className="w-full h-44">
        <Avatar
          className="w-full h-full object-cover rounded-md"
          src={props.formik.values.image}
        />
      </div>
    </div>
  );
}

export default ImageInput;
