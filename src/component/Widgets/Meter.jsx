import React from "react"
import WidgetInitialDiv from "./WidgetInitialDiv.jsx";

const Meter = () =>{
    return(
        <>
                <WidgetInitialDiv title="Meter">
                    <div className="p-4">
                        <div className="flex flex-col items-center">
                            <p className="text-gray-600 font-medium ">Ammeter</p>
                            <p className="text-xl border border-transparent rounded-md bg-[#EBEBEB] p-2 mt-1">0</p>
                            <p className="text-[#888888] mt-1">A</p>
                        </div>
                    </div>
                </WidgetInitialDiv>
        </>
    );
}
export default Meter;