import React from "react";
import capitalize from "../../../utils/capitalize";
import Content from "./Content";

function CardContent({ contents }) {
  const contentsArr = [];
  for (const key in contents) {
    const element = <Content title={capitalize(key)} content={contents[key]} />;

    contentsArr.push(element);
  }

  return <div className="mt-8">{contentsArr}</div>;
}

export default CardContent;
