import React from "react"
import { MdBugReport } from "react-icons/md";

const BugIcon = ({className="h-10 w-10"}) =>{
    return(
        <>
            <MdBugReport className={className} />
        </>
    );
}
export default BugIcon;