import React from "react";
import { FaCamera } from "react-icons/fa";

const CameraIcon = ({className="h-10 w-10"}) =>{
    return(
        <>
            <FaCamera className={className} />
        </>
    );
}
export default CameraIcon;