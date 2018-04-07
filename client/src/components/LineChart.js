import React from 'react';
import {withStyles} from 'material-ui/styles';
import {Line} from 'react-chartjs-2';

const styles = theme => ({
    root: {}
});

class LineChart extends React.Component {
    render() {
        const data = {
            labels: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
            datasets: [{
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
                data: [10, 20, 30, 40, 50, 60, 65, 70, 73, 76, 77, 78],
                spanGaps: false,
            }]
        };

        const {width = '', height = ''} = this.props;

        return (
            <Line
                data={data}
                width={width}
                height={height}
                options={{
                    maintainAspectRatio: false
                }}
            />
        )
    }
}

export default withStyles(styles)(LineChart);