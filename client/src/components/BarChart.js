import React from 'react';
import {withStyles} from 'material-ui/styles';
import {Bar} from 'react-chartjs-2';

const data = {
    labels: ["20%", "", "30%", "", "40%", "", "50%", "", "60%", "", "70%", "", "80%", "", "90%", "", "100%"],
    datasets: [{
        data: [11, 8, 16, 17, 39, 38, 46, 65, 58, 77, 79, 70, 61, 45, 20, 9, 8, 4],
        backgroundColor: [
            'rgba(255, 0, 0, 0.6)',
            'rgba(255, 0, 0, 0.6)',
            'rgba(255, 48, 0, 0.6)',
            'rgba(255, 48, 0, 0.6)',
            'rgba(255, 102, 0, 0.6)',
            'rgba(255, 102, 0, 0.6)',
            'rgba(255, 154, 0, 0.6)',
            'rgba(255, 205, 0, 0.6)',
            'rgba(255, 255, 0, 0.6)',
            'rgba(203, 255, 0, 0.6)',
            'rgba(203, 255, 0, 0.6)',
            'rgba(203, 255, 0, 0.6)',
            'rgba(150, 255, 0, 0.6)',
            'rgba(94, 255, 0, 0.6)',
            'rgba(94, 255, 0, 0.6)',
            'rgba(94, 255, 0, 0.6)',
            'rgba(0, 255, 0, 0.6)',
            'rgba(0, 255, 0, 0.6)'
        ]
    }]
};

const option = {
    tooltips: {
        enabled: false
    },
    legend: {
        display: false
    },
    annotation: {
        annotations: [
            {
                type: "line",
                mode: "vertical",
                scaleID: "x-axis-0",
                value: "70%",
                borderColor: "black",
                label: {
                    content: "Your Score",
                    enabled: true,
                    position: "center"
                }
            }]
    },
    scales: {
        yAxes: [{
            display: false
        }],
        xAxes: [{
            barPercentage: 1.0,
            categoryPercentage: 1.0,
            gridLines: {
                display: false
            },
        }]
    }
};

export default class LineChart extends React.Component {
    render() {
        return (
            <Bar
                data={data}
                options={option}
            />
        )
    }
}