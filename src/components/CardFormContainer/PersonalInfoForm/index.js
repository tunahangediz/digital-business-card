import React, { useState } from "react";
import Input from "../../Input";
import ImageInput from "./ImageInput";

function PersonalInfoForm({ onSubmit, formik }) {
  const [imageActive, setImageActive] = useState(true);
  const handleCheckBox = (e) => {
    formik.setFieldValue("imageActive", !formik.values.imageActive);
  };
  return (
    <form
      className=" max-w-md w-full mx-auto md:mx-0  bg-[#1A1B22] p-8 flex flex-col gap-4 "
      onSubmit={onSubmit}
    >
      <div>
        <label htmlFor="name">Full Name</label>
        <Input
          value={formik.values.name}
          onChange={formik.handleChange}
          name={"name"}
          type="text"
          label={"Full Name"}
          placeHolder="Enter your full name"
        ></Input>
      </div>

      <div>
        <label htmlFor="profession">Profession</label>
        <Input
          id="profession"
          name="profession"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.profession}
          placeHolder="What's your job?"
        />
      </div>
      <div>
        <label htmlFor="profession">Personal Website</label>
        <Input
          id="personalWebsite"
          name="personalWebsite"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.personalWebsite}
          placeHolder="Website url"
        />
      </div>

      <div>
        <label htmlFor="navLinks.email">Email</label>
        <Input
          id="navLinks.email"
          name="navLinks.email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.navLinks.email}
          placeHolder="exapmle@gmail.com"
        />
      </div>

      <div>
        <label htmlFor="navLinks.linkedin">Linkedin</label>
        <Input
          id="navLinks.linkedin"
          name="navLinks.linkedin"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.navLinks.linkedin}
          placeHolder="linkedin.com/username"
        />
      </div>

      <label
        for="checked-toggle"
        class="inline-flex relative items-center cursor-pointer"
      >
        <input
          type="checkbox"
          value={formik.values.imageActive}
          id="checked-toggle"
          class="sr-only peer"
          checked={formik.values.imageActive}
          onClick={handleCheckBox}
        />
        <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Checked toggle
        </span>
      </label>

      {formik.values.imageActive && (
        <ImageInput
          id="image"
          name="image"
          setFieldValue={formik.setFieldValue}
          formik={formik}
        />
      )}
    </form>
  );
}

export default PersonalInfoForm;
