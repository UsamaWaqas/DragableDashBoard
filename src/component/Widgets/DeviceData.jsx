import React from "react";
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PowerIcon from '@mui/icons-material/Power';
import UpdateData from "./UpdateData.jsx";
import ReceiveDataTime from "./ReceiveDataTime.jsx";
import DeviceDataFooterIcon from "./DeviceDataFooterIcon.jsx";
import WidgetInitialDiv from "./WidgetInitialDiv.jsx";
const DeviceData = () =>{
 return(
     <>
         {/*<div className="widget-content ">*/}
         {/*    <div className="w-full flex flex-wrap ">*/}
            <WidgetInitialDiv title="Device Data">
                 <div className="flex-grow flex flex-col justify-between p-4">
                     <p className="text-[11px] mb-2 ml-5 text-gray-600">AC Switch sim-f82f-12fb8-a826</p>
                     <div className="flex flex-wrap mt-15">
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
                 <DeviceDataFooterIcon Icon1={SignalCellularAltIcon} Icon2={PowerIcon} />
            </WidgetInitialDiv>
     </>
 );
};
export default DeviceData;