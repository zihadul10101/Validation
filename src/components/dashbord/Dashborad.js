import React from 'react';
import Chart from 'react-apexcharts';

const Dashborad = () => {
    const chartOptions = {
        series:[
            {
                name:'visitors',
                data:[100,120,390,200,244,324,723,342,321,933,500,1000]
            }
        ],
        options: {
            color:['#181ee8','#181ee8'],
            chart:{
                background: 'transparent'
            },
            dataLabels: {
                enabled:false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                categories: ['January','February','March','April','May','June','July','August','September','October','November','December']
            },
            legend:{
                position: 'top'
            },
            grid: {
                show: 'false'
            }
        }
    }
    return (
        <div className="card-chart">
        <Chart 
        options={chartOptions.options}
        series={chartOptions.series}
        type='bar'
        height='100%'
        width='100%'
        />
    </div>
    );
};

export default Dashborad;