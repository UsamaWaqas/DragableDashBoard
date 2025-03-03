import './App.css'
import Grid from './component/Grid'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeviceData from "./component/Widgets/DeviceData"
import TemperatureDevice from "./component/Widgets/TemperatureDevice.jsx";
import TankLevel from "./component/Widgets/TankLevel.jsx";
import Value from "./component/Widgets/Value.jsx";
import Status from "./component/Widgets/Status.jsx";
import OnlineStatus from "./component/Widgets/OnlineStatus.jsx";
import ToggleDevice from "./component/Widgets/ToggleDevice.jsx";
import Battery from "./component/Widgets/Battery.jsx";
import Meter from "./component/Widgets/Meter.jsx";
import SignalStrength from "./component/Widgets/SignalStrength.jsx";
import WaterLeak from "./component/Widgets/WaterLeak.jsx";
import EnergyConsumptionStatus from "./component/Devices/EnergyConsumptionStatus.jsx";
import Acceleration from "./component/Devices/Acceleration.jsx";
import Moisture from "./component/Devices/Moisture.jsx";
import Humidity from "./component/Devices/Humidity.jsx";
import ReedSwitch from "./component/Devices/ReedSwitch.jsx";
import ReedSwitchCount from "./component/Devices/ReedSwitchCount.jsx";
import DeviceBattery from "./component/Devices/DeviceBattery.jsx";
import RelayControl from "./component/Devices/RelayControl.jsx";
import EnergyConsumptionMeter from "./component/Devices/EnergyConsumptionMeter.jsx";
import Ammeter from "./component/Devices/Ammeter.jsx";
import Voltmeter from "./component/Devices/Voltmeter.jsx";
import PowerMeterRealPower from "./component/Devices/PowerMeterRealPower.jsx";
import PowerMeterApparentPower from "./component/Devices/PowerMeterApparentPower.jsx";
import PowerFactorMeter from "./component/Devices/PowerFactorMeter.jsx";
// import Settings from './component/Settings'
//
// import ToggleBtn from './component/ToggleBtn'
 


function App() {


  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Grid />} />
                <Route path="/devicedata" element={<DeviceData />} />
                <Route path="/temperaturedevice" element={<TemperatureDevice />} />
                <Route path="/tanklevel" element={<TankLevel />} />
                <Route path="/value" element={<Value />} />
                <Route path="/status" element={<Status />} />
                <Route path="/onlinestatus" element={<OnlineStatus />} />
                <Route path="/toggledevice" element={<ToggleDevice />} />
                <Route path="/battery" element={<Battery />} />
                <Route path="/meter" element={<Meter />} />
                <Route path="/signal" element={<SignalStrength />} />
                <Route path="/waterleak" element={<WaterLeak />} />
                <Route path="/energyconsumptionStatus" element={<EnergyConsumptionStatus />} />
                <Route path="/acceleration" element={<Acceleration />} />
                <Route path="/moisture" element={<Moisture />} />
                <Route path="/humidity" element={<Humidity />} />
                <Route path="/reed" element={<ReedSwitch />} />
                <Route path="/reedcount" element={<ReedSwitchCount />} />
                <Route path="/Devicebattery" element={<DeviceBattery />} />
                <Route path="/relaycontrol" element={<RelayControl />} />
                <Route path="/energyconsumptionmeter" element={<EnergyConsumptionMeter />} />
                <Route path="/ammeter" element={<Ammeter />} />
                <Route path="/voltmeter" element={<Voltmeter />} />
                <Route path="/power" element={<PowerMeterRealPower />} />
                <Route path="/powerApparent" element={<PowerMeterApparentPower />} />
                <Route path="/powerFactor" element={<PowerFactorMeter />} />
            </Routes>
        </Router>
    </div>

  );
}

export default App
