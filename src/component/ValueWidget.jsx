import React, { useState } from "react";
import { CircleChevronUp, X, CircleChevronDown } from "lucide-react";
import Modal from "@mui/material/Modal";
import InputField from "../component/InputField"; // Adjust path if needed
import ShowAndHide from "../component/ShowAndHide";
import DropDown from "./DropDown";
import ToggleBtn from "./ToggleBtn";
import ReuseAbleSetting from "./ReuseAbleSetting";

export default function ValueWidget({
  isOpen,
  onClose,
  popupData,
  setPopupData,
  handleModalSubmit
}) {
  const [location, setlocation] = useState("");
  const [Device, setDevices] = useState("");
  const [Icon, setIcon] = useState("");
   const [Decimal,setDecimal] = useState('');
      

  const HandleIcon = (e) => {
    setIcon(e.target.value);
  };

  const handleChange = (event) => {
    setlocation(event.target.value);
  };
  const handleChanges = (event) => {
    setDevices(event.target.value);
  };

  const HandleDecimal = (e)=>{
    setDecimal(e.target.value)
  }

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

  const icon = [
    { label: "AC Current", value: 20 },
    { label: "Asset", value: 21 },
    { label: "Air", value: 22 }
  ];
  const decimal = [
    
    { label: "AC Current", value: 20 },
    { label: "Asset", value: 21 },
    { label: "Air", value: 22 }
  ];

  return (
    <Modal open={isOpen} onClose={onClose} aria-labelledby="modal-title">
      <div className="fixed top-0 left-0 w-full h-screen flex overflow-y-auto justify-center bg-black/50">
        <div className="bg-white  p-6 w-[800px] rounded-2xl h-fit my-10 shadow-lg relative">
           {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-black"
          >
            <X size={24} />
          </button>

          {/* Header */}
          <div className="mb-4">
            <h1 className="text-xl font-bold">Widget Settings</h1>
            <p className="text-gray-600">Device Data (Default)</p>
          </div>

          {/* General Section */}
          <h2 className="font-bold text-lg mb-2">General</h2>

          {/* Input Fields */}
          <div className="flex flex-col gap-4">
            {[{ label: "Widget Name (optional)", key: "name" }].map((field) => (
              <div key={field.key} className="p-4 bg-gray-100 rounded-xl">
                <div className="bg-white   rounded-lg">
                  <InputField
                    className="w-full rounded-sm text-lg p-4 focus:outline-none"
                    placeholder={field.label}
                    value={popupData[field.key]}
                    onChange={(e) =>
                      setPopupData({
                        ...popupData,
                        [field.key]: e.target.value
                      })
                    }
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Settings Section */}
          <div>
            <h2 className="font-bold text-lg mt-4">Settings</h2>
          </div>
          <ReuseAbleSetting>
            <div>
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
                <div className=" flex justify-between mt-8">
                  <p className=" font-[14px] text-gray-400">
                    Show unit description
                  </p>
                  <ToggleBtn defaultChecked />
                </div>
                <div className=" flex justify-between mt-6">
                  <p className=" font-[14px] text-gray-400">Large unit label</p>
                  <ToggleBtn defaultChecked />
                </div>
              </div>
              <div className="mt-6">
                <DropDown
                  label="Icon"
                  value={Icon}
                  onChange={HandleIcon}
                  options={icon}
                />
              </div>
              <div >
                
                <DropDown
                  label="Decimal"
                  onChange={HandleDecimal}
                  value={Decimal}
                  options={decimal}
                />
              </div>

              <div>
                <h1 className="mt-8 font-bold text-gray-400">Options</h1>

                <div className=" flex justify-between mt-8">
                  <p className=" font-[14px] text-gray-400">Show timestamp</p>
                  <ToggleBtn defaultChecked />
                </div>
              </div>
            </div>
          </ReuseAbleSetting>
          {/* <Misc_Settings/> */}
          {/* Submit Button */}
          <div className="flex mt-4 justify-between">
            <div className="flex gap-4">
              <button
                onClick={onClose}
                className=" text-[#393939] font-bold px-6 py-2 rounded hover:bg-[#eee]"
              >
                cancel
              </button>
              <button className=" text-[#ea1c0d] font-bold px-6 py-2 rounded">
                Remove Widget
              </button>
            </div>
            <button
              onClick={handleModalSubmit}
              className=" bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
