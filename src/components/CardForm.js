import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  useFormik,
} from "formik";
import React, { useEffect } from "react";
import Input from "./Input";

function CardForm({ setValues }) {
  const formik = useFormik({
    initialValues: {
      name: "Laura Smith",
      profession: "Frontend Developer",
      navLinks: { email: "", linkedin: "" },
      contents: {
        about:
          "Lorem, ipsum dolor sit amet consectetur ratione odio quisquam  adipisicing elit. o quisquam fuga!",
        interest:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ratione odio quisquam   dolorum ratione odio quisquam fuga!",
      },
      socialLinks: [
        {
          name: "github",
          url: "https://github.com/",
          placeholder: "github username ",
          active: true,
        },

        {
          name: "facebook",
          url: "",
          placeholder: "facebook url",
          active: true,
        },
        {
          name: "instagram",
          url: "https://www.instagram.com/",
          placeholder: "Instagram username without @ ",
          active: true,
        },
        {
          name: "twitter",
          url: "https://twitter.com/",
          placeholder: "Twitter username without @",
          active: true,
        },
      ],
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    setValues(formik.values);
    console.log(formik.values.navLinks);
  }, [formik.values]);

  return (
    <div className="w-full flex flex-col item-center  ">
      <form
        className=" max-w-md w-full mx-auto md:mx-0  my-4 bg-[#1A1B22] p-8 flex flex-col gap-4 "
        onSubmit={formik.handleSubmit}
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CardForm;
