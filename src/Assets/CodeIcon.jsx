import React from "react";
import { PiCode } from "react-icons/pi";

const CodeIcon = ({className="h-10 w-10"}) =>{
    return(
        <>
            <PiCode className={className} />
        </>
    );
}
export default CodeIcon;