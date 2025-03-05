import React from "react";
import {useState} from "react";
import ReactApexChart from "react-apexcharts";
import WidgetInitialDiv from "../Widgets/WidgetInitialDiv.jsx";

const ApexChart = () => {
    const [chartData, setChartData] = useState({
        series: [45],
        options: {
            chart: {
                type: 'donut',
            },
            labels: ["Battery (Muhammad Ali Tektelic Smart Room v2021 (Water Leak))"],
            legend: {
                position: "top",
                horizontalAlign: "center",
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: 'top',
                        },
                    },
                },
            ],
        },
    });

    return (
        <div id="chart">
            <ReactApexChart options={chartData.options} series={chartData.series} type="donut" />
        </div>
    );
};

const DonutChart = () =>{
    return(
        <>
            <WidgetInitialDiv title="Donut Chart">
                <div className="p-4">
                    <div className="flex flex-col items-center">
                        <ApexChart />
                    </div>
                </div>
            </WidgetInitialDiv>
        </>
    );
};
export default DonutChart;