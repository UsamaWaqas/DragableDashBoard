import React from "react";
import WidgetInitialDiv from "../Widgets/WidgetInitialDiv.jsx";
import PowerMeterComponent from "./PowerMeterComponent.jsx";

const PowerFactorMeter = () =>{
    return (
        <>
            <WidgetInitialDiv title="Tektelic AC Switch">
                <PowerMeterComponent
                    PowerTitle="Power Meter (Real Power)"
                    UnitSign=""
                    Unit=""
                />
            </WidgetInitialDiv>
        </>
    );
}
export default PowerFactorMeter;