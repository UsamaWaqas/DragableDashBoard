import React from "react";
import { MdOutlineEmojiEmotions } from "react-icons/md";

const EmojiIcon = ({className="h-10 w-10"}) =>{
    return(
        <>
            <MdOutlineEmojiEmotions className={className} />
        </>
    );
}
export default EmojiIcon;