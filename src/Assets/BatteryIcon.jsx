import React from "react"
import { FaBatteryHalf } from "react-icons/fa";
const BatteryIcon = ({className="h-10 w-10"}) =>{
    return(
        <>
            <FaBatteryHalf className={className}/>
        </>
    );
}
export default BatteryIcon;