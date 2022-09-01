import React from "react";
import Input from "../../Input";
import Button from "../../UI/Button";

function PersonalInfoForm({ onSubmit, formik }) {
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
        />
      </div>
    </form>
  );
}

export default PersonalInfoForm;
