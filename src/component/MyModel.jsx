import React from "react";
import { X } from "lucide-react";
import Modal from "@mui/material/Modal";
import InputField from "./Utils/InputField"; // Adjust path if needed

export default function TailwindMuiModal({
  isOpen,
  onClose,
  popupData,
  setPopupData,
  handleModalSubmit,
}) {
  return (
    <Modal open={isOpen} onClose={onClose} aria-labelledby="modal-title">
      <div className="fixed top-0 left-0 w-full h-full flex overflow-y-auto  items-center justify-center bg-black/50">
        <div className="bg-white rounded-2xl p-6 w-[800px]  top-30 shadow-lg relative">
          {/* Close Button */}
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-black">
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
            {[
              { label: "Widget Name (optional)", key: "name" },
              { label: "Age", key: "Age" },
              { label: "Company Name", key: "companyName" },
            ].map((field) => (
              <div key={field.key} className="p-4 bg-gray-100 rounded-xl">
                <div className="bg-white border border-gray-300 rounded-xl">
                  <InputField
                    className="w-full text-lg p-4 focus:outline-none"
                    placeholder={field.label}
                    value={popupData[field.key]}
                    onChange={(e) =>
                      setPopupData({ ...popupData, [field.key]: e.target.value })
                    }
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Settings Section */}
          <h2 className="font-bold text-lg mt-4">Settings</h2>
          <div className="bg-gray-200 rounded-xl w-full h-[200px] mt-2"></div>

          {/* Submit Button */}
          <button
            onClick={handleModalSubmit}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
}
