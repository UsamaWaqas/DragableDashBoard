import React from "react";
import { X } from "lucide-react";
import InputField from "./Utils/InputField"; // Adjust path if needed

const Modal = ({ isOpen, onClose, popupData, setPopupData, handleModalSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay fixed overflow-y-auto top-0 left-0 h-screen w-screen flex items-center z-[1000] justify-center bg-black/50">
      <div className="bg-white rounded-xl">
        <div className="modal p-[20px] w-[800px]">
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold">Widget Settings</h1>
              <p className="text-[#393939]">Device Data (Default)</p>
            </div>

            <button onClick={onClose}>
              <X />
            </button>
          </div>

          <div className="mt-2">
            <h1 className="font-bold">General</h1>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl p-4 border-1 border-[#eee] bg-[#f8f8f8]">
              <div className="bg-[#fff] border-1 border-[#eee] rounded-2xl">
                <InputField
                  className="w-full font-[1rem] focus:outline-none p-[16px]"
                  placeholder=" Widget Name (optional)"
                  value={popupData.name}
                  onChange={(e) => setPopupData({ ...popupData, name: e.target.value })}
                />
              </div>
            </div>

            <div className="rounded-2xl p-4 border-1 border-[#eee] bg-[#f8f8f8]">
              <div className="bg-[#fff] border-1 border-[#eee] rounded-2xl">
                <InputField
                  className="w-full font-[1rem] focus:outline-none p-[16px]"
                  placeholder="Age"
                  value={popupData.Age}
                  onChange={(e) => setPopupData({ ...popupData, Age: e.target.value })}
                />
              </div>
            </div>

            <div className="rounded-2xl p-4 border-1 border-[#eee] bg-[#f8f8f8]">
              <div className="bg-[#fff] border-1 border-[#eee] rounded-2xl">
                <InputField
                  className="w-full font-[1rem] focus:outline-none p-[16px]"
                  placeholder="Company Name"
                  value={popupData.companyName}
                  onChange={(e) => setPopupData({ ...popupData, companyName: e.target.value })}
                />
              </div>
            </div>

            <div>
              <h1 className="font-bold">Settings</h1>
            </div>

            <div className="bg-[#eee] rounded-2xl w-[752px] h-[262px]"></div>
          </div>

          <button onClick={handleModalSubmit} className="mt-4 bg-blue-500 text-white px-6 py-2 rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
