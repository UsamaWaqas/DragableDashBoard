import React from "react";
import WidgetInitialDiv from "../Widgets/WidgetInitialDiv.jsx";
import PowerMeterComponent from "./PowerMeterComponent.jsx";

const PowerMeterApparentPower = () =>{
    return(
        <>
            <WidgetInitialDiv title="Tektelic AC Switch">
                <PowerMeterComponent
                    PowerTitle="Power Meter (Apparent Power)"
                    UnitSign="W"
                    Unit="Watts"
                />
            </WidgetInitialDiv>
        </>
    );
}
export default PowerMeterApparentPower