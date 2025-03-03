import React from "react";
import { GiLeak } from "react-icons/gi";

const LeakIcon = ({className="h-10 w-10"}) =>{
    return(
        <>
            <GiLeak className={className} />
        </>
    );
}
export default LeakIcon;