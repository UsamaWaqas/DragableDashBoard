import React, {useState} from "react";
import temperatureImage from "/src/images/temperatureIcons/temperature.png";
import thermometerImage from "/src/images/temperatureIcons/thermometer.png";
import WidgetInitialDiv from "./WidgetInitialDiv.jsx";

const TemperatureDevice = () =>{
    const [temperature, SetTemperature]=useState(false);
    return(
        <>
                <WidgetInitialDiv title="TemperatureDevice">
                    <div className="p-4">
                        <div className="flex flex-wrap mt-4">
                            <div className="flex items-center justify-between">
                            {temperature ? (
                                <img src={temperatureImage} alt="Temperature"/>
                            ):(<img src={thermometerImage} alt="Temperature" />)
                            }
                                <p className="text-4xl">-</p>
                            </div>
                        </div>
                    </div>
                </WidgetInitialDiv>

        </>
    );
}
export default TemperatureDevice;