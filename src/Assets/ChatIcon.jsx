import React from "react";
import { BsChat } from "react-icons/bs";

const ChatIcon = ({className="h-10 w-10"}) =>{
    return(
        <>
            <BsChat className={className} />
        </>
    );
}
export default ChatIcon;