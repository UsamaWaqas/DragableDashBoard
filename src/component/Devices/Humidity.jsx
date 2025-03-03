import React from "react"
import WidgetInitialDiv from "../Widgets/WidgetInitialDiv.jsx";

const Humidity = () =>{
    return(
        <>
            <WidgetInitialDiv title="Tektelic Smart Room v2021 (Water Leak)">
                <div className="p-4">
                <div className="flex flex-col items-center">
                    <p className="text-sm font-medium">Humidity</p>
                    <span className="flex items-center space-x-2">
                      <p className="text-4xl">-</p>
                        <p className="text-[#979797]">%</p>
                    </span>
                    <p className="text-md text-[#979797]">Percent (%)</p>
                </div>
                </div>
            </WidgetInitialDiv>
        </>
    );
}
export default Humidity;