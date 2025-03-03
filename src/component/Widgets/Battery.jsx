import React from "react";
import { PiBatteryEmptyDuotone } from "react-icons/pi";
import WidgetInitialDiv from "./WidgetInitialDiv.jsx";
const Battery = () =>{
    return(
        <>
                <WidgetInitialDiv title="Battery">
                    <div className="p-4">
                        <div className="flex flex-col items-center mb-5">
                            <p className="text-gray-600 font-medium -mb-3">Ammeter</p>
                            <PiBatteryEmptyDuotone className="text-[#B8B8B8] h-20 w-20" />
                            <p className="text-gray-500 font-medium -mt-5">-A</p>
                        </div>
                    </div>
                </WidgetInitialDiv>
        </>
    );
}
export default Battery;