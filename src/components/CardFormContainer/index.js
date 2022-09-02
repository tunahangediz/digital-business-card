import { useFormik } from "formik";
import React, { useEffect } from "react";
import initialFormValues from "../../data/initialFormValues";
import ContentForm from "./ContentForm";
import PersonalInfoForm from "./PersonalInfoForm";
import SocialForm from "./SocialForm";

function CardFormContainer({ setValues }) {
  const localValues = JSON.parse(localStorage.getItem("formValues"));
  const formik = useFormik({
    initialValues: localValues || initialFormValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formik.values));
    setValues(formik.values);
    console.log("formik Changes");
  }, [formik.values]);

  return (
    <div className=" max-w-xl w-full flex flex-col item-center  py-8  ">
      <PersonalInfoForm onSubmit={formik.handleSubmit} formik={formik} />
      <ContentForm formik={formik} />
      <SocialForm formik={formik} />
    </div>
  );
}

export default CardFormContainer;
