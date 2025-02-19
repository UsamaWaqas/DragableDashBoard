import React, { useState } from "react";
import { CircleChevronUp, CircleChevronDown } from "lucide-react";
import Switch from "@mui/material/Switch";  

import DropDown from "./DropDown";
import ToggleBtn from "./ToggleBtn";

function ShowAndHide() {
  const [isExpanded, setIsExpanded] = useState(false);

  const [location, setlocation] = useState("");
  const [Device, setDevices] = useState("");

  const Locations = [
    { label: "None", value: "" },
    { label: "usama waqas", value: 20 },
    { label: "chirp technology", value: 21 },
    { label: " sensor device", value: 22 }
  ];

  const Devices = [
    { label: "None", value: "" },
    { label: "battery", value: 20 },
    { label: "Temperature", value: 21 },
    { label: "Heat", value: 22 }
  ];



  const handleChange = (event) => {
    setlocation(event.target.value);
  };
  const handleChanges = (event) => {
    setDevices(event.target.value);
  };

  const toggleSize = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      <h2 className="font-bold text-lg mt-4">Settings</h2>
      <div
        className={`bg-gray-200 border-gray-300 border-1  shadow-sm rounded-xl p-3 ${
          isExpanded ? "w-[752px] h-[320px]" : "w-[752px] h-[50px]"
        } mt-2 transition-all duration-300`}
      >
        {isExpanded ? (
          <CircleChevronDown
            className="text-gray-400   cursor-pointer"
            onClick={toggleSize}
          />
        ) : (
          <CircleChevronUp
            className="text-gray-400  cursor-pointer"
            onClick={toggleSize}
          />
        )}
        {isExpanded && (
        <>
        <DropDown
          label="Location"
          onChange={handleChange}
          value={location}
          options={Locations}
          
        />
        <DropDown
          label="Devices"
          onChange={handleChanges}
          value={Device}
          options={Devices}
        />
        <div>
          <h1 className="mt-8 font-bold text-gray-400">Options</h1>

          <div className=" flex justify-between mt-8">
            <p className=" font-[14px] text-gray-400">Show timestamp</p>
           <ToggleBtn defaultChecked />
          </div>
        </div>
        </>
         )}
      </div>
    </div>
  );
}

export default ShowAndHide;
