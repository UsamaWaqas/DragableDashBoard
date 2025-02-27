import React, { useState } from "react";
import Tables from "./Tables";
import img1 from "./img.png";


function Bills() {

 const [activeStep, setActiveStep] = useState(3);





  return (
    <div>
      <div>
        <h1 className="font-bold">Add LoRaWAN Device</h1>
      </div>
      <div className="mt-6 flex justify-between">
        {["Product","Devices", "Network Server",  "Plan"].map((step, index) => (
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
      <div className="mt-12">
        <h1 className="font-bold text-[#4a4a4a]">Network Server</h1>
        <p className="text-[#6b7280]">
          Please choose the LoRaWAN Network Server that your devices are
          connected to.
        </p>
      </div>

      
      <div className="mt-4">
     
      </div>
    </div>
  );
}

export default Bills;

