import React from "react";

const PowerMeterComponent = ({PowerTitle, UnitSign, Unit}) =>{
    return(
        <>
            <div className="p-4">
                <div className="flex flex-col items-center">
                    <p className="text-sm font-medium">{PowerTitle}</p>
                    <span className="flex items-center space-x-2">
                      <p className="text-4xl">-</p>
                        <p className="text-[#979797]">{UnitSign}</p>
                    </span>
                    <p className="text-md text-[#979797]">{Unit}</p>
                </div>
            </div>
        </>
    );
}
export default PowerMeterComponent;