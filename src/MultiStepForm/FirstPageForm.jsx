import React, { useState, useEffect } from "react";
import ReuseAbleBox from "./ReuseAbleBox";
import SearchBar from "./SearchBar";
import { Search } from "lucide-react";
import SelectReuseAble from "./SelectReuseAble";
import Tables from "./Tables";
import { CircleAlert } from "lucide-react";
import img1 from "./img.png";

function FirstPageForm({ setIsTableRowSelected }) {
  const [selectedBox, setSelectedBox] = useState(0);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
  ];

  const handleRowSelection = (rows) => {
    setSelectedRows(rows);
    setIsTableRowSelected(rows.length > 0);
    console.log("helo");
    console.log("Rows selected:", rows.length > 0);
  };
  const data = [
    {
      id: 1,
      heading: "LoRaWAN",
      description: "Choose from 16 LoRaWAN networks",
      icon: img1
    },
    {
      id: 2,
      heading: "Particle",
      description: "Connect your Particle devices",
      icon: img1
    },
    {
      id: 3,
      heading: "Particle",
      description: "Connect your Particle devices",
      icon: img1
    },
    {
      id: 4,
      heading: "Particle",
      description: "Connect your Particle devices",
      icon: img1
    },
    {
      id: 5,
      heading: "Particle",
      description: "Connect your Particle devices",
      icon: img1
    },
    {
      id: 6,
      heading: "Particle",
      description: "Connect your Particle devices",
      icon: img1
    },
    {
      id: 7,
      heading: "Particle",
      description: "Connect your Particle devices",
      icon: img1
    },
    {
      id: 8,
      heading: "Particle",
      description: "Connect your Particle devices",
      icon: img1
    },
    {
      id: 9,
      heading: "Particle",
      description: "Connect your Particle devices",
      icon: img1
    }
  ];

  const columns = [
    { field: "icon", label: "Icon" },
    { field: "heading", label: "Heading" },
    { field: "description", label: "Description" }
  ];

  const handleBoxClick = (index) => {
    setSelectedBox(index);
  };

  const boxData = [
    {
      Heading: "New Product from template",
      Paragraph: "Create new product from a template",
      ExtraContent: (
        <div className=" flex flex-col ">
          <h1 className="font-bold text-[#4a4a4a]  ">Device Template</h1>
          <p className="text-[#6b7280] mb-4">
            Datacake supports LoRaWAN devices from different manufacturers out
            of the box without complex configuration and setup.
          </p>
          <div className="flex items-center gap-4 w-full">
            <SearchBar
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-1/2"
            />
            <SelectReuseAble
              label="All Manufacturers"
              options={options}
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="w-1/2"
            />
          </div>
          <div className="mt-4">
            <Tables
              data={data}
              columns={columns}
              enableSelection={true}
              onSelectionChange={handleRowSelection}
              renderCell={(value, column) =>
                column.field === "icon" ? (
                  <img src={value} alt="icon" width={40} height={40} />
                ) : (
                  value
                )
              }
            />
          </div>
        </div>
      )
    },
    {
      Heading: "Existing Product",
      Paragraph: "Add devices to an existing product",
      ExtraContent: (
        <div>
          <div className="p-4 border overflow-hidden border-gray-300 mt-2">
            <h1 className="font-bold text-[#4a4a4a]">Existing Products</h1>
            <p className="text-[#6b7280] ">
              You can add devices to an existing product in your workspace to
              have them share the same fields, decoders, dashboards, downlinks
              and more.
            </p>

            <div className="bg-yellow-100 mt-4 rounded-lg h-[80px] ">
              <div className="flex gap-2 p-2">
                <CircleAlert className="text-amber-300" />
                <h1 className="text-[#854d0e] font-bold">
                  No products in workspace
                </h1>
              </div>

              <h1 className="text-[#a16207] ml-10">
                There are no existing products in this workspace.
              </h1>
            </div>
          </div>
        </div>
      )
    },
    {
      Heading: "New Product",
      Paragraph: "Create new empty product",
      ExtraContent: (
        <div className="">
          <div>
            <h1 className="font-bold">New Product</h1>
            <p className="text-[#6b7280] mt-2">
              If your device is not available as a template, you can start with
              an empty device. You will have to create the device definition
              (fields, dashboard) and provide the payload decoder in the
              device's configuration.
            </p>
          </div>
          <form className="mt-4">
            <label className="block mb-2 text-[#4a4a4a] font-bold">
              Product Name
            </label>
            <input
              type="text"
              className="border-1 mt-2 border-gray-400 rounded-lg focus:outline-none shadow-sm p-2 w-full"
              placeholder="Enter product name"
            />
            {/* <button
            type="submit"
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Create Product
          </button> */}
          </form>
        </div>
      )
    }
  ];

  return (
    <div className="  p-6 ">
      <div className="">
        <div>
          <h1 className="font-bold">Add Dragino NB-IoT Device</h1>
        </div>

        <div className="mt-6 flex justify-between">
          {["Product", "Devices", "Network Server", "Plan"].map(
            (step, index) => (
              <div
                key={index}
                className={`border-t-4 w-[186px] ${
                  selectedBox === index ? "border-blue-400" : "border-gray-300"
                }`}
              >
                <div className="flex mt-2 flex-col items-center">
                  <div
                    className={`font-bold ${
                      selectedBox === index ? "text-blue-500" : "text-gray-400"
                    }`}
                  >
                    Step {index + 1}
                  </div>
                  <div
                    className={`font-bold text-sm ${
                      selectedBox === index ? "text-[#4a4a4a]" : "text-gray-400"
                    }`}
                  >
                    {step}
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="mt-12">
          <h1 className="text-[#111827] font-bold">Datacake Product</h1>
          <p className="text-[#6b7280] m-1">
            You can add devices to an existing product on Datacake, create a new
            empty product or start with one of the templates.
          </p>
        </div>

        <div className="mt-4 flex justify-between">
          {boxData.map((item, index) => (
            <ReuseAbleBox
              key={index}
              Heading={item.Heading}
              Paragraph={item.Paragraph}
              isSelected={selectedBox === index}
              onClick={() => handleBoxClick(index)}
            />
          ))}
        </div>

        {boxData[selectedBox] && (
          <div className="mt-6 w-full  rounded-lg">
            <div className="mt-2">{boxData[selectedBox].ExtraContent}</div>
            {/* Sirf ExtraContent render hoga, heading remove kar di gayi hai */}
          </div>
        )}
      </div>
    </div>
  );
}

export default FirstPageForm;
