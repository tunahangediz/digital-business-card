import React from "react";

function Content({ title, content }) {
  return (
    <div className="mt-4">
      <h2 className="text-xl text-white font-semibold">{title}</h2>
      <p
        style={{ fontSize: "clamp(0.75rem,10vw,1rem)" }}
        className="text-white text-xs  leading-[1.1rem] font-thin break-words "
      >
        {content}
      </p>
    </div>
  );
}

export default Content;
