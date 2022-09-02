import React from "react";
import CardContent from "./CardContent";
import Contact from "./Contact";
import Footer from "./Footer";
import User from "./User";

function BussinesCard({ values }) {
  return (
    <div className="max-w-sm w-full flex justify-center py-8 sm:sticky top-0 ">
      <div className="bg-[#1A1B22] min-w-[360px] w-full rounded-lg pt-6  overflow-hidden">
        <User values={values} />
        <div className="max-w-[270px] mx-auto">
          <Contact values={values} />
          <CardContent contents={values.contents} />
        </div>
        <Footer socialLinks={values.socialLinks} />
      </div>
    </div>
  );
}

export default BussinesCard;
