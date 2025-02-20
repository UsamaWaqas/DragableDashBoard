import React from "react";

const ToggleBtn = ({ 
  checked, 
  onChange, 
  label, 
  width = "w-11", 
  height = "h-6", 
  bgColor = "bg-gray-400", 
  activeBgColor = "bg-green-500", 
  borderColor = "border-gray-300",
  circleBorderColor = "border-gray-300",
  className 
}) => {
  return (
    <label className={`inline-flex items-center cursor-pointer ${className}`}>
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={onChange} 
        className="sr-only peer" 
      />
      <div 
        className={`relative ${width} ${height} ${bgColor} peer-focus:outline-none 
        peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
        rounded-full peer dark:bg-gray-700 peer-checked:${activeBgColor} 
        peer-checked:${borderColor} 
        after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
        after:bg-white after:${circleBorderColor} after:border after:rounded-full 
        after:h-5 after:w-5 after:transition-all dark:border-gray-600 
        peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full`}
      ></div>
      
      {label && <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>}
    </label>
  );
};

export default ToggleBtn;
 