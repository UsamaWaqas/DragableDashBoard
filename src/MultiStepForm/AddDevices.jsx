import React, { useState } from "react";
import { X } from "lucide-react";
import Modal from "@mui/material/Modal";
import FirstPageForm from "./FirstPageForm";
import SecondPageForm from "./SecondPageForm";
import ThirdPageForm from "./ThirdPageForm";
import Bills from "./Bills";

export default function AddDevice() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTableRowSelected, setIsTableRowSelected] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false); // Track form filling
  const [step, setStep] = useState(1);

  const handleOpen = () => {
    setIsOpen(true);
    setStep(1);
  };

  const handleClose = () => setIsOpen(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleOpen}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Open Modal
      </button>

      <Modal open={isOpen} onClose={handleClose} aria-labelledby="modal-title">
        <div className="fixed top-0 left-0 w-full h-screen flex overflow-y-auto justify-center bg-black/50">
          <div className="bg-white p-6 w-[900px] rounded-lg h-fit my-10 shadow-lg relative">
            {/* Close Button */}
            <div className="flex gap-2 justify-end">
              <button
                onClick={handleClose}
                className="cursor-pointer text-gray-700 hover:text-gray-400"
              >
                <X size={24} />
              </button>
            </div>

            {/* Multi-Step Form */}
            {step === 1 && <FirstPageForm setIsTableRowSelected={setIsTableRowSelected} />}
            {step === 2 && <ThirdPageForm setIsFormFilled={setIsFormFilled} />}
            {step === 3 && <SecondPageForm setIsTableRowSelected={setIsTableRowSelected} />}
            {step === 4 && <Bills />}

            {/* Footer Buttons */}
            <div className="flex mt-4 gap-3 justify-end">
              {step > 1 && (
                <button className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500" onClick={() => setStep(step - 1)}>
                  Back
                </button>
              )}
              <button
  className={`px-6 py-2 rounded ${
    (step === 1 && !isTableRowSelected) || 
    (step === 2 && !isFormFilled) || 
    (step === 3 && !isTableRowSelected) // Disable on step 3 if no row is selected
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-blue-500 hover:bg-blue-600 text-white"
  }`}
  onClick={() => (step < 4 ? setStep(step + 1) : handleClose())}
  disabled={
    (step === 1 && !isTableRowSelected) || 
    (step === 2 && !isFormFilled) || 
    (step === 3 && !isTableRowSelected) // Disable if no row is selected
  }
>
  {step < 4 ? "Next" : "Finish"}
</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
