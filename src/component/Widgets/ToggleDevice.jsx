import React from "react";
import {PiWaveSineDuotone} from "react-icons/pi";
import ToggleBtn from "../ToggleBtn.jsx";
import WidgetInitialDiv from "./WidgetInitialDiv.jsx";

const ToggleDevice = () =>{
    return(
        <>
            <WidgetInitialDiv title="Toggle Device">
                        <div className="p-4">
                            <p className="text-center text-gray-600 font-medium ml-1 mb-2">Relay Control</p>
                            <div className="flex flex-wrap justify-center">
                                <ToggleBtn />
                            </div>
                            <p className="text-center text-sm text-gray-700 mb-8 ml-1">Relay Control:0.0</p>
                        </div>
                        <div className="rounded-md text-center p-3">
                            <p>
                            <span className="border bg-[#E8F4FE]  border-[#2196F3] px-3 py-1 rounded-md inline-block pb-6 text-sm text-gray-600">
                                <p className="text-[11px] text-gray-400">Ammeter</p>
                                - A
                            </span>
                            </p>
                        </div>
            </WidgetInitialDiv>
        </>
    );
}
export default ToggleDevice;