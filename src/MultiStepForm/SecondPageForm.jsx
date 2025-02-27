import React, { useState } from "react";
import Tables from "./Tables";
import img1 from "./img.png";


function SecondPageForm({ setIsTableRowSelected }) {

 const [activeStep, setActiveStep] = useState(2);

const [selectedRows, setSelectedRows] = useState([]);

  const handleRowSelection = (rows) => {
    console.log("handleRowSelection Triggered!");
    setSelectedRows(rows);
    setIsTableRowSelected(rows.length > 0); 
    console.log("helo")
    console.log("Rows selected:", rows.length > 0);
  };



const data = [
  { id: 1, heading: "LoRaWAN", description: "Choose from 16 LoRaWAN networks", icon: img1 },
  { id: 2, heading: "Particle", description: "Connect your Particle devices", icon: img1 },
  { id: 3, heading: "Particle", description: "Connect your Particle devices", icon: img1 },
  { id: 4, heading: "Particle", description: "Connect your Particle devices", icon: img1 },
  { id: 5, heading: "Particle", description: "Connect your Particle devices", icon: img1 },
  { id: 6, heading: "Particle", description: "Connect your Particle devices", icon: img1 },
  { id: 7, heading: "Particle", description: "Connect your Particle devices", icon: img1 },
  { id: 8, heading: "Particle", description: "Connect your Particle devices", icon: img1 },
  { id: 9, heading: "Particle", description: "Connect your Particle devices", icon: img1 },
];

const columns = [
  { field: "icon", label: "Icon" },
  { field: "heading", label: "Heading" },
  { field: "description", label: "Description" },
];

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
      <Tables
      data={data}
      columns={columns}
      enableSelection={true}
      onSelectionChange={handleRowSelection}
      renderCell={(value, column) => column.field === "icon" ? <img src={value} alt="icon" width={40} height={40} /> : value}
    />
      </div>
    </div>
  );
}

export default SecondPageForm;
