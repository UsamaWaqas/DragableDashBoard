import React from "react"
import { PiCellSignalFullBold } from "react-icons/pi";
import WidgetInitialDiv from "./WidgetInitialDiv.jsx";
const SignalStrength = () =>{
    return(
        <>
                <WidgetInitialDiv title="Signal Strength">
                    <div className="p-4">
                        <div className="flex flex-col items-center mb-5">
                            <p className="text-gray-600 font-medium -mb-1">Ammeter</p>
                            <PiCellSignalFullBold className="h-20 w-20 text-[#8BC34A]" />
                            <p className="text-gray-500 font-medium -mt-3">-A</p>
                        </div>
                    </div>
                </WidgetInitialDiv>
        </>
    );
}
export default SignalStrength;