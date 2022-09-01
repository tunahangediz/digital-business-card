import { Formik, useFormik } from "formik";
import React, { useEffect } from "react";
import initialFormValues from "../../data/initialFormValues";
import ContentForm from "./ContentForm";
import PersonalInfoForm from "./PersonalInfoForm";
import Form from "./PersonalInfoForm";
import SocialForm from "./SocialForm";

function CardFormContainer({ setValues }) {
  const formik = useFormik({
    initialValues: initialFormValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    setValues(formik.values);
    console.log(formik.values);
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
