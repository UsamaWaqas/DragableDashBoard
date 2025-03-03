import React from "react";
import ACCurrentIcon from "../../Assets/ACCurrentIcon.jsx";
import WidgetInitialDiv from "./WidgetInitialDiv.jsx";

const OnlineStatus = () =>{
    return(
        <>
                <WidgetInitialDiv title="Online Status">
                    <div className="p-4">
                        <p className="text-center text-gray-700 font-medium ml-1 text-[15px]">Device Status</p>
                        <div className="flex flex-wrap justify-center">
                            <ACCurrentIcon className="w-20 h-20 text-gray-600"/>
                        </div>
                        <p className="text-center text-4xl text-gray-700 mb-8">Online</p>
                    </div>
                </WidgetInitialDiv>
        </>
    );
}
export default OnlineStatus;