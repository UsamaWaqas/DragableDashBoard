import React from "react"
import AnalyticsIcon from "@mui/icons-material/Analytics";

const WidgetInitialDiv = ({ children, title }) =>{
    return(
        <>
            <div className="h-full w-full bg-white rounded-lg overflow-hidden border-1 border-[#9926AC] p-2">
                <p className="text-xs font-medium text-gray-500 cursor-all-scroll"><AnalyticsIcon className="text-[#b733ce]" />{title}</p>
                {children}
            </div>
        </>
    );
}
export default WidgetInitialDiv;