import React from "react";
import WidgetInitialDiv from "../Widgets/WidgetInitialDiv.jsx";
import { PiBatteryEmptyDuotone } from "react-icons/pi";

const DeviceBattery = () =>{
    return(
        <>
            <WidgetInitialDiv title="Tektelic Smart Room v2021 (Water Leak)">
                <div className="p-4">
                    <div className="flex flex-col items-center mb-5">
                        <p className="text-gray-600 font-medium -mb-3">Battery</p>
                        <PiBatteryEmptyDuotone className="text-[#B8B8B8] h-20 w-20" />
                        <p className="text-gray-500 font-medium -mt-5">-%</p>
                    </div>
                </div>
            </WidgetInitialDiv>
        </>
    );
}
export default DeviceBattery;