import React from "react";
import RadioBtn from "./RadioBtn";

function Labels({ heading, paragraph, image, selectedValue, setSelectedValue }) {
  return (
    <div
      className={`flex p-4 border-b gap-2  border-[#eee] cursor-pointer ${
        selectedValue === heading ? "bg-blue-100" : ""
      }`}
      onClick={() => setSelectedValue(heading)} // Clicking anywhere selects this option
    >
      {/* Radio Button */}
      <div>
        <RadioBtn
          checked={selectedValue === heading}
          onChange={() => setSelectedValue(heading)}
          onClick={(e) => e.stopPropagation()} // Prevents double triggering
        />
      </div>

      {/* Image */}
      <div className="w-[48px] h-[48px]">
        <img src={image} alt={heading} />
      </div>

      {/* Text */}
      <div>
        <h1 className="text-[#374151]">{heading}</h1>
        <p className="text-[#6b7280]">{paragraph}</p>
      </div>
    </div>
  );
}

export default Labels;
