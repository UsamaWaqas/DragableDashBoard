import React, {useState} from "react";
import MyModal from "../MyModel";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { FaBatteryHalf } from "react-icons/fa";

const Value = () =>{
    const [popupData, setPopupData] = useState({ name: "Value" });
    return(
        <>
            <div className="w-full lg:w-1/2 xl:w-1/4 sm:w-1/2 md-1/2 ml-10 flex-wrap ">
                <div className="bg-white rounded-lg overflow-hidden border-1 border-[#9926AC] p-2 mt-3">
                    <p className="text-xs font-medium text-gray-500"><AnalyticsIcon className="text-[#b733ce]" /> {popupData.name}</p>
                    <div className="p-4">
                        <p className="text-center text-gray-600 font-medium">Ammeter</p>
                        <div className="flex flex-wrap justify-center">
                            <FaBatteryHalf className="w-10 h-10" />
                            <p className="mt-2 ml-1 font-semibold">-</p>
                            <p className="mt-1 ml-1 text-gray-500">A</p>
                        </div>
                        <p className="text-center text-sm text-gray-500 mb-8">Ampere</p>
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
export default Value;