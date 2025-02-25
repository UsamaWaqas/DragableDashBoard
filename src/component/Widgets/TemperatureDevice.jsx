import React, {useState} from "react";
import { PiThermometerFill } from "react-icons/pi";
import MyModal from "../MyModel";
import AnalyticsIcon from "@mui/icons-material/Analytics";

const TemperatureDevice = () =>{
    const [popupData, setPopupData] = useState({ name: "Temperature Device" });
    return(
        <>
            <div className="w-full lg:w-1/2 xl:w-1/4 sm:w-1/2 md-1/2 ml-10 flex-wrap ">
                <div className="bg-white rounded-lg overflow-hidden border-1 border-[#9926AC] p-2 mt-3">
                    <p className="text-xs font-medium text-gray-500"><AnalyticsIcon className="text-[#b733ce]" /> {popupData.name}</p>
                    <div className="p-4">
                        <div className="flex flex-wrap mt-4">
                            <PiThermometerFill className="w-35 h-35 text-gray-400" />
                        </div>
                    </div>
                </div>
            </div>

            <MyModal
                popupData={popupData}
                setPopupData={setPopupData}
            />
        </>
    );
}
export default TemperatureDevice;