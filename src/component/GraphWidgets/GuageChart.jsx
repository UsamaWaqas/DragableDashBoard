import {useState} from "react";
import ReactApexChart from "react-apexcharts";
import WidgetInitialDiv from "../Widgets/WidgetInitialDiv.jsx";
const ApexGuageChart = () => {
    const [state, setState] = useState({
        series: [100],
        options: {
            chart: {
                height: 350,
                type: "radialBar",
                offsetY: -10,
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 135,
                    dataLabels: {
                        name: {
                            show: false,
                        },
                        value: {
                            offsetY: 76,
                            fontSize: "22px",
                            formatter: (val) => val + "%",
                        },
                    },
                },
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    shadeIntensity: 0.15,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91],
                },
            },
            stroke: {
                dashArray: 4,
            },
            title: {
                text: "Battery",
                align: "center",
                margin: 10,
                offsetY: 30,
                style: {
                    fontSize: "14px",
                    fontWeight: "bold",
                },
            },
        },
    });



    return (
        <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="radialBar" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
}

const GuageChart =()=>{
    return(
        <>
          <WidgetInitialDiv title="Guage Chart">

              <ApexGuageChart />

          </WidgetInitialDiv>
        </>
    );
}
export default GuageChart;