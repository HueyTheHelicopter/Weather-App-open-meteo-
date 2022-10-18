import React, { useContext } from "react";
import '../App.css';
import ReactApexChart from 'react-apexcharts'
import { DateTimeContext, TemperatureContext } from "../context/context";

const LineChart = () => {	

    const { temperature } = useContext(TemperatureContext);
    const { datetimes } = useContext(DateTimeContext);

    function fffunction() {
        var arr = []

        Object.values(datetimes).forEach((item) => {
            arr.push(`${new Date(item).toString().slice(4, 10)} ${new Date(item).toString().slice(16, 21)}`);
        })

        return arr
    }

    const state = {
          
        series: [{
          name: 'Temperature',
          data: [...temperature]
        }],
        options: {
          chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
              type: 'x',
              enabled: true,
              autoScaleYaxis: true
            },
            toolbar: {
              autoSelected: 'zoom'
            }
          },
          dataLabels: {
            enabled: false
          },
          markers: {
            size: 0,
          },
          title: {
            text: 'Weather Chart',
            align: 'center'
          },
          grid: {
            row: {
              colors: ['#a18f142', '#a18f142', '#a18f142']
            },
            column: {
              colors: ['#a18f142', '#a18f142', '#a18f142']
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.5,
              opacityTo: 0,
              stops: [0, 90, 100]
            },
          },
          yaxis: {
            show: true,
            align: 'right',
            labels: {
              formatter: function (val) {
                return `${val} ℃`
              },
            },
            title: {
              text: 'Temperature',
              style: {
                colors: ['#b4bfbf', '#b4bfbf', '#b4bfbf']
              }
            },
          },
          xaxis: {
            type: 'datetime',
            categories: fffunction()
          },
          tooltip: {
            shared: false
          }
        },
    }

    return (
        <div className="chart" style={{marginTop: '20px'}}>
            <ReactApexChart options={state.options} series={state.series} type="area" 
            height={'200%'} width={'400%'} />
        </div>
    );
}
  
export default LineChart;