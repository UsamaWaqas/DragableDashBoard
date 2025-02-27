import React, { useState } from "react";
import InputDragAndDrop from "./InputDragAndDrop";
import TagInput from "./TagInput";

const ThirdPageForm = ({ setIsFormFilled }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [isNextDisabled, setIsNextDisabled] = useState(true); // Disable Next by default

  return (
    <div className="border-2 border-amber-200 p-6">
      <div>
        <h1 className="font-bold">Add LoRaWAN Device</h1>
      </div>

      {/* Steps Navigation */}
      <div className="mt-6 flex justify-between">
        {["Product", "Devices", "Network Server", "Plan"].map((step, index) => (
          <div
            key={index}
            className={`w-[186px] border-t-4 ${
              index === activeStep ? "border-blue-600" : "border-gray-300"
            }`}
          >
            <div className="flex mt-2 flex-col items-center">
              <div
                className={`font-bold ${
                  index === activeStep ? "text-blue-600" : "text-gray-500"
                }`}
              >
                Step {index + 1}
              </div>
              <div
                className={`font-bold text-sm ${
                  index === activeStep ? "text-[#111827]" : "text-[#6b7280]"
                }`}
              >
                {step}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Section Heading */}
      <div className="mt-8">
        <h1 className="font-bold text-[#4a4a4a]">Add Devices</h1>
      </div>

      {/* Content Based on Active Tab */}
      <div className="mt-2 rounded-md">
        <div>
          <p className="text-[#6b7280]">
            Please provide one or multiple LoRaWAN device EUIs along with the corresponding names they should have on Datacake.
          </p>
          <p className="mt-4 text-[#6b7280]">
            Alternatively, you can choose to upload a CSV file that contains the DevEUI, device Name, location, and a set of tags. For more information on how to format the file, please refer to
            <span className="text-blue-500 cursor-pointer"> our documentation</span>
          </p>
          <div className="mt-4">
            <InputDragAndDrop />
          </div>

          <TagInput setIsFormFilled={setIsFormFilled} />
        </div>
      </div>

      {/* Next Button */}
    
    </div>
  );
};

export default ThirdPageForm;
