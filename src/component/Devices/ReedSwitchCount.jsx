import React from "react"
import WidgetInitialDiv from "../Widgets/WidgetInitialDiv.jsx";

const ReedSwitchCount = () =>{
    return(
        <>
            <WidgetInitialDiv title="Tektelic Smart Room v2021 (Water Leak)">
                <div className="p-4">
                <div className="flex flex-col items-center">
                    <p className="text-sm font-medium">Reed Switch Count</p>
                    <p className="text-4xl">-</p>
                </div>
                </div>
            </WidgetInitialDiv>
        </>
    );
}
export default ReedSwitchCount;