import React from "react";
import WidgetInitialDiv from "../Widgets/WidgetInitialDiv.jsx";
import PowerMeterComponent from "./PowerMeterComponent.jsx";
const PowerMeterRealPower = () =>{
    return(
        <WidgetInitialDiv title="Tektelic AC Switch">
            <PowerMeterComponent
                PowerTitle="Power Meter (Real Power)"
                UnitSign="W"
                Unit="Watts"
            />
        </WidgetInitialDiv>
    );
}
export default PowerMeterRealPower;