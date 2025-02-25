import React, {useState} from "react";
import MyModal from "../MyModel";
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PowerIcon from '@mui/icons-material/Power';
import UpdateData from "./UpdateData.jsx";
import ReceiveDataTime from "./ReceiveDataTime.jsx";
const DeviceData = () =>{
    const [popupData, setPopupData] = useState({ name: "Device Data" });
 return(
     <>
         <div className="w-full lg:w-1/2 xl:w-1/3 sm:w-1/2 md-1/2 ml-10 flex-wrap ">
             <div className="bg-white rounded-lg overflow-hidden border-1 border-[#9926AC] p-2 mt-3">
                 <p className="text-xs font-medium text-gray-500"><AnalyticsIcon className="text-[#b733ce]" /> {popupData.name}</p>
                 <div className="p-4">
                     <p className="text-[11px] mb-2 ml-5 text-gray-600">AC Switch sim-f82f-12fb8-a826</p>
                     <div className="flex-wrap flex mt-15">
                     <UpdateData
                         border_And_bg_color="border-[#9926AC] bg-[#9926AC]"
                         textColor="text-white"
                         DeviceTextColor="text-[#C9A5CF]"
                         DataTextColorAndSize="text-white text-[17px]"
                         setDevice="Simulated Device"
                         setData="Update Data"
                     />
                         <ReceiveDataTime
                             border_And_bg_color="border-[#FFC107] bg-[#FFF9E6]"
                             setborderPadding="p-3"
                             setTextsizeColor="text-xs text-[#897D5C]"
                             setTextReceiveData="It may take up to 3 hours to receive sensor data."
                         />
                     </div>
                 </div>
                 <div className="mb-4 mt-10">
                 <SignalCellularAltIcon className="text-[#DADADA]" />
                     <PowerIcon className="text-[#DADADA] ml-1" />
                 </div>
             </div>
         </div>
         <MyModal
             popupData={popupData}
             setPopupData={setPopupData}
         />
     </>
 );
};
export default DeviceData;