import {useState} from "react";
import ReactApexChart from "react-apexcharts";
import WidgetInitialDiv from "../Widgets/WidgetInitialDiv.jsx";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
const ApexBarChart = () => {
    const [state, setState] = useState({

        series: [{
            name: 'Earning',
            data: [1, 20, 40, 60, 80, 100]
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    columnWidth: '30%', // Adjusted for 12 months
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + "";
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ["#304758"]
                }
            },
            xaxis: {
                categories: [
                    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                ], // Added 12 months
                position: 'bottom',
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#D8E3F0',
                            colorTo: '#BED1E6',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                }
            },
            yaxis: {
                axisBorder: {
                    show: true
                },
                axisTicks: {
                    show: true,
                },
                labels: {
                    show: true,
                    formatter: function (val) {
                        return val + "";
                    }
                }
            },
            title: {
                text: '',
                floating: true,
                offsetY: 330,
                align: 'center',
                style: {
                    color: '#444',
                }
            }
        },
    });




    return (
        <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
}
const BarChart=()=>{
    const [startDate, setStartDate] = useState(dayjs());
    const [endDate, setEndDate] = useState(dayjs());

    return(
        <>
            <WidgetInitialDiv title="Bar Chart">
                <div className="p-4">
                    <div className="flex justify-center">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker label="Check-in" value={startDate} onChange={(newValue) => setStartDate(newValue)} />
                        <DatePicker label="Check-out" value={endDate} onChange={(newValue) => setEndDate(newValue)} />
                    </LocalizationProvider>
                    </div>
                <ApexBarChart />
                </div>
            </WidgetInitialDiv>
        </>
    );
}
export default BarChart;