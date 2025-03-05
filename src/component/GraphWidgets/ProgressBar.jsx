import {useState} from "react";
import WidgetInitialDiv from "../Widgets/WidgetInitialDiv.jsx";

const ProgressBar = () =>{

    const [batteryLevel, setBatteryLevel] = useState(Math.floor(Math.random() * 91) + 10);

    return(
        <>
            <WidgetInitialDiv title="Progress Bar">
                <div className="p-4 mt-15 mb-15">
                    <div className="flex flex-col items-center">
                        <div className="relative border-hidden rounded-3xl bg-[#EBEBEB] w-[100%] h-9 overflow-hidden">
                            <div
                                className="absolute top-0 left-0 h-full rounded-3xl bg-[#3f933f] transition-all duration-700"
                                style={{ width: `${batteryLevel}%` }}
                            ></div>
                            <p className="absolute inset-0 flex justify-center items-center text-xs font-semibold text-[#393939]">
                                {batteryLevel}%
                            </p>
                        </div>
                    </div>
                </div>
            </WidgetInitialDiv>
        </>
    );
}
export default ProgressBar;