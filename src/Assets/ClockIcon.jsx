import React from "react";
import { GoClock } from "react-icons/go";

const ClockIcon = ({className="h-10 w-10"}) =>{
    return(
        <>
            <GoClock className={className} />
        </>
    );
}
export default ClockIcon;