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
            </Routes>
        </Router>
    </div>

  );
}

export default App
