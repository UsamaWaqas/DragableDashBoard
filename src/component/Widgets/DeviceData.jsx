import React, {useState} from "react";
import MyModal from "../MyModel";
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PowerIcon from '@mui/icons-material/Power';
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
                     <div className="border rounded-md border-[#9926AC] bg-[#9926AC] pr-5 hover:bg-[#771E86]">
                         <a href="#" className="flex">
                          <AnalyticsIcon className="text-white mt-2 ml-2"/>
                             <div className="flex-col">
                             <p className="text-xs ml-2 text-[#C9A5CF] font-medium">Simulated Devices</p>
                             <p className="ml-2 text-white text-[17px] font-medium">Update Data</p>
                             </div>
                         </a>
                     </div>
                     <div className="border rounded-md border-[#FFC107] bg-[#FFF9E6] ml-2">
                         <div className="p-3">
                             <p className="text-xs text-[#897D5C]">It may take up to 3 hours to receive sensor data.</p>
                         </div>
                     </div>
                     </div>
                 </div>
                 <div className="mb-4">
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