import React, { useState } from "react";
import { CircleChevronUp, X, CircleChevronDown } from "lucide-react";
import Modal from "@mui/material/Modal";
import InputField from "./InputField"; // Adjust path if needed
import ShowAndHide from "./ShowAndHide";
import Misc_Settings from "./Misc_Settings";
import DropDown from "./DropDown";
import Region from "./Region";
import LowerRegion from "./LowerRegion";

export default function DeviceData({
  isOpen,
  onClose,
  popupData,
  setPopupData,
  handleModalSubmit
}) {
  const [location, setlocation] = useState("");
  const [Device, setDevices] = useState("");

  const handleChange = (event) => {
    setlocation(event.target.value);
  };

  const handleChanges = (event) => {
    setDevices(event.target.value);
  };

  const Devices = [
    { label: "None", value: "" },
    { label: "battery", value: 20 },
    { label: "Temperature", value: 21 },
    { label: "Heat", value: 22 }
  ];

  const Locations = [
    { label: "None", value: "" },
    { label: "usama waqas", value: 20 },
    { label: "chirp technology", value: 21 },
    { label: " sensor device", value: 22 }
  ];

  return (
    <Modal   open={isOpen} onClose={onClose} aria-labelledby="modal-title" >
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
            {/* Widget Name Input */}
            <div className="p-4 bg-gray-100  shadow-lg rounded-xl">
              <div className="bg-white ">
                <InputField
                  className="w-full rounded-sm text-lg p-4 focus:outline-none"
                  placeholder="Widget Name (optional)"
                  value={popupData.name}
                  onChange={(e) =>
                    setPopupData({
                      ...popupData,
                      name: e.target.value
                    })
                  }
                />
              </div>
              <div className="bg-white mt-4 rounded-lg">
                <InputField
                  className="w-full rounded-sm text-lg p-4 focus:outline-none"
                  placeholder="Label (Optional)"
                  value={popupData.companyName}
                  onChange={(e) =>
                    setPopupData({
                      ...popupData,
                      companyName: e.target.value
                    })
                  }
                />
              </div>
            </div>

            {/* Company Name Input */}
          </div>

          {/* Settings Section */}
          {/* <ShowAndHide />  */}
          <div className="mt-4 font-bold">Settings</div>
          <div className="flex mt-4 flex-col ">
            {/* Widget Name Input */}
            <div className="p-4 bg-gray-100  shadow-lg rounded-xl">
              <div>
                <DropDown
                  label="Location"
                  onChange={handleChange}
                  value={location}
                  options={Locations}
                />
              </div>
              <div>
                <DropDown
                  label="Devices"
                  onChange={handleChanges}
                  value={Device}
                  options={Devices}
                />
              </div>
            </div>
            <div className=" mt-4 font-bold">Primary Region</div>
            <Region />
            <div className=" mt-4 font-bold">Secondary Region</div>
            <Region />
            
            </div>
            <div className=" mt-4 font-bold">Lower Region</div>
            <LowerRegion/>

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
