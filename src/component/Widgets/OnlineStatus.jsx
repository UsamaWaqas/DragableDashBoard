import React, {useState} from "react";
import MyModal from "../MyModel";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { PiWaveSineDuotone } from "react-icons/pi";

const OnlineStatus = () =>{
    const [popupData, setPopupData] = useState({ name: "Online Status" });
    return(
        <>
            <div className="w-full lg:w-1/2 xl:w-1/4 sm:w-1/2 md-1/2 ml-10 flex-wrap ">
                <div className="bg-white rounded-lg overflow-hidden border-1 border-[#9926AC] p-2 mt-3">
                    <p className="text-xs font-medium text-gray-500"><AnalyticsIcon className="text-[#b733ce]" /> {popupData.name}</p>
                    <div className="p-4">
                        <p className="text-center text-gray-700 font-medium ml-1 text-[15px]">Device Status</p>
                        <div className="flex flex-wrap justify-center">
                            <PiWaveSineDuotone className="w-20 h-20 text-gray-600" />
                        </div>
                        <p className="text-center text-4xl text-gray-700 mb-8">Online</p>
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
export default OnlineStatus;