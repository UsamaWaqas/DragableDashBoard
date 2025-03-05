import {useState} from "react";
import WidgetInitialDiv from "../Widgets/WidgetInitialDiv.jsx";
import ReactApexChart from "react-apexcharts";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";


const ApexLineChart = () => {
    const [state, setState] = useState({

        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: '',
                align: 'center'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            },
            yaxis: {
                title: {
                    text: 'Battery', // ✅ Title added to Y-axis
                    style: {
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#333' // Optional: Change title color
                    }
                }
            }
        },


    });



    return (
        <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
}

const LineChart = () => {
    const [startDate, setStartDate] = useState(dayjs());
    const [endDate, setEndDate] = useState(dayjs());

    return (
            <WidgetInitialDiv title="Line Chart">
                <div className="p-4">
                    <div className="flex justify-center">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker label="Check-in" value={startDate} onChange={(newValue) => setStartDate(newValue)} />
                        <DatePicker label="Check-out" value={endDate} onChange={(newValue) => setEndDate(newValue)} />
                        </LocalizationProvider>
                    </div>
                    <ApexLineChart />
                </div>
            </WidgetInitialDiv>
    );
};

export default LineChart;