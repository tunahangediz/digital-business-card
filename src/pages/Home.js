import React, { useState } from "react";
import BussinesCard from "../components/BusinessCard";
import CardForm from "../components/CardForm";
import CardFormContainer from "../components/CardFormContainer";
import initialFormValues from "../data/initialFormValues";

function Home() {
  const [values, setValues] = useState(initialFormValues);

  return (
    <div className="w-full flex md:justify-between md:flex-row flex-col items-center md:items-start ">
      {/* <CardForm setValues={setValues} /> */}
      <CardFormContainer setValues={setValues} />
      <BussinesCard values={values} />
    </div>
  );
}

export default Home;