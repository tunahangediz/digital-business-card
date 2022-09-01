import React from "react";
import removeHttp from "../../../utils/removeHttp";
import ContactLink from "./ContactLink";

function Contact({ values }) {
  return (
    <div>
      <div className="flex w-full justify-between  mt-5 ">
        <ContactLink href={`mailto:${values.navLinks.email}`}>
          <img className="w-4" src="/images/Icon.svg" alt="" />
          <p>Email</p>
        </ContactLink>
        <ContactLink
          href={"//" + removeHttp(values.navLinks.linkedin)}
          className="bg-[#3d88dd] rounded-md text-white"
        >
          <img className="w-4" src="/images/linkedin.svg" alt="" />
          <p>Linkedin</p>
        </ContactLink>
      </div>
    </div>
  );
}

export default Contact;
