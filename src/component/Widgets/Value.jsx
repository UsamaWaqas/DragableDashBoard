import React from "react";
import WidgetInitialDiv from "./WidgetInitialDiv.jsx";
import BatteryIcon from "../../Assets/BatteryIcon.jsx";

const Value = () =>{
    return(
        <>
        <WidgetInitialDiv title="Value">
                    <div className="p-4">
                        <p className="text-center text-gray-600 font-medium">Ammeter</p>
                        <div className="flex flex-wrap justify-center">
                            <BatteryIcon className="h-10 w-10"/>
                            <p className="mt-2 ml-1 font-semibold">-</p>
                            <p className="mt-1 ml-1 text-gray-500">A</p>
                        </div>
                        <p className="text-center text-sm text-gray-500 mb-8">Ampere</p>
                    </div>
        </WidgetInitialDiv>
        </>
    );
}
export default Value;