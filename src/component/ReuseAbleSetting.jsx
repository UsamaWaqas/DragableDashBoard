import { CircleChevronUp, CircleChevronDown } from "lucide-react";
import { useState } from "react";

const ReuseAbleSetting = ({className,children}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSize = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      
      <div
        className={ ` ${className} bg-gray-200 border-gray-300 border-1  shadow-sm rounded-xl p-3 ${
          isExpanded ? "w-[752px] h-auto" : "w-[752px] h-[50px]"
        } mt-2 transition-all duration-300`}
      >{isExpanded ? (
          <CircleChevronDown className="text-gray-400 cursor-pointer" onClick={toggleSize} />
        ) : (
          <CircleChevronUp className="text-gray-400 cursor-pointer" onClick={toggleSize} />
        )}
        {isExpanded && <div >{children}</div>}
      </div>
    </div>
  );
};

export default ReuseAbleSetting;
