
import './App.css'
import Grid from './component/Grid'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeviceData from "./component/Widgets/DeviceData"
// import Settings from './component/Settings'
//
// import ToggleBtn from './component/ToggleBtn'
 


function App() {


  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Grid />} />
                <Route path="/devices" element={<DeviceData />} />
            </Routes>
        </Router>
    </div>

  );
}

export default App
