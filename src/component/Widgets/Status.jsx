import React from "react";
import WidgetInitialDiv from "./WidgetInitialDiv.jsx";
import BatteryIcon from "../../Assets/BatteryIcon.jsx";

const Status = () =>{
    return(
        <>
                <WidgetInitialDiv title="Status">
                    <div className="p-4">
                        <p className="text-center text-gray-600 font-medium ml-1">Ammeter</p>
                        <div className="flex flex-wrap justify-center">
                            <BatteryIcon className="w-10 h-10 text-gray-500"/>
                        </div>
                        <p className="text-center text-4xl text-gray-700 mb-8">0.0</p>
                    </div>
                </WidgetInitialDiv>
        </>
    );
}
export default Status;