import React from "react";
import { PiWaveSine } from "react-icons/pi";

const VoltageIcon = ({className="h-10 w-10"}) =>{
    return(
        <>
            <PiWaveSine className={className} />
        </>
    );
}
export default VoltageIcon;