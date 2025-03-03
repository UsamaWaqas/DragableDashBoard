import React from "react";
import { SiIbeacon } from "react-icons/si";
const BeaconIcon = ({className="h-10 w-10"}) =>{
    return(
        <>
            <SiIbeacon className={className} />
        </>
    );
}
export default BeaconIcon;