import React from "react";
import Lottie from "lottie-react";
import Animation from "../../images/Animation - 1740660568208.json";
import WidgetInitialDiv from "./WidgetInitialDiv.jsx";
const WaterLeak = () =>{

    return(
        <>
            <WidgetInitialDiv title="Water Leak">
                <div className="p-4">
                    <div className="flex flex-col items-center">
                        <p className="text-md font-medium">Water Leak</p>
                        <p className="text-4xl">Leak Detected</p>
                        <Lottie animationData={Animation} loop={true} style={{height:"30%",width:"30%", background:"none"}}/>
                    </div>
                </div>
            </WidgetInitialDiv>
        </>
    );
}
export default WaterLeak;