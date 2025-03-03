import React from "react";

const DeviceDataFooterIcon = ({ Icon1 ,Icon2 }) =>{
    return(
        <>
            <div className="mb-4 mt-10">
                <Icon1 className="text-[#DADADA]" />
                <Icon2 className="text-[#DADADA] ml-1" />
            </div>
        </>
    );
}
export default DeviceDataFooterIcon;