import React from 'react';
import {withStyles} from 'material-ui/styles';
import {Line} from 'react-chartjs-2';

const styles = theme => ({
    root: {}
});

class LineChart extends React.Component {
    render() {
        const data = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "Stock A",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(225,0,0,0.4)",
                borderColor: "red", // The main line color
                borderCapStyle: 'square',
                borderDash: [], // try [5, 15] for instance
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "black",
                pointBackgroundColor: "white",
                pointBorderWidth: 1,
                pointHoverRadius: 8,
                pointHoverBackgroundColor: "yellow",
                pointHoverBorderColor: "brown",
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,
                // notice the gap in the data and the spanGaps: true
                data: [65, 59, 80, 81, 56, 55, 40, , 60, 55, 30, 78],
                spanGaps: true,
            }, {
                label: "Stock B",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(167,105,0,0.4)",
                borderColor: "rgb(167, 105, 0)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "white",
                pointBackgroundColor: "black",
                pointBorderWidth: 1,
                pointHoverRadius: 8,
                pointHoverBackgroundColor: "brown",
                pointHoverBorderColor: "yellow",
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,
                // notice the gap in the data and the spanGaps: false
                data: [10, 20, 60, 95, 64, 78, 90, 30, 70, 40, 70, 89],
                spanGaps: false,
            }

            ]
        };
        // const data = {
        //     label: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
        //     datasets: [
        //         {
        //             data: [10,20,30,50,20,10,30
        //                 // {
        //                 //     x: 2014,
        //                 //     y: 180
        //                 // },
        //                 // {
        //                 //     x: 2015,
        //                 //     y: 200
        //                 // },
        //                 // {
        //                 //     x: 2016,
        //                 //     y: 220
        //                 // },
        //                 // {
        //                 //     x: 2017,
        //                 //     y: 240
        //                 // },
        //                 // {
        //                 //     x: 2018,
        //                 //     y: 275
        //                 // },
        //                 // {
        //                 //     x: 2019,
        //                 //     y: 300
        //                 // },
        //                 // {
        //                 //     x: 2020,
        //                 //     y: 290
        //                 // }
        //                 ]
        //         }
        //     ]
        // };

        return (
            <Line
                data={data}
                width='100%'
                height='100%'
                options={{
                    maintainAspectRatio: false
                }}
            />
        )
    }
}

export default withStyles(styles)(LineChart);