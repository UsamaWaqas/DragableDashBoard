import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const CheckIcon = ({className="h-10 w-10"}) =>{
    return(
      <>
          <FaCheckCircle className={className} />
      </>
    );
}
export default CheckIcon;