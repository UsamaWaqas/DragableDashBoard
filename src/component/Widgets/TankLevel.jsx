import React from "react";
import cylinder from "/src/images/cylinder-svgrepo-com.svg";
import WidgetInitialDiv from "./WidgetInitialDiv.jsx";

const TankLevel = () =>{
    return(
        <>
            <WidgetInitialDiv title="Tank Level">
                    <div className="p-4">
                        <div className="flex justify-center">
                            <img src={cylinder} alt="Temperature"/>
                        </div>
                        <p className="text-center text-4xl text-[#1E90FF]">0.00%</p>
                        <p className="text-center text-sm text-gray-400">(0.00 / 100.00) A</p>
                    </div>
            </WidgetInitialDiv>

        </>
    );
}
export default TankLevel;