import 'rc-slider/assets/index.css';

import React from 'react';
import Slider from 'rc-slider';
import Typography from 'material-ui/Typography';

const style = {width: '100%'};
const marks = {
    1: {
        label:<Typography variant="subheading">Poor</Typography>
    },
    2: {
        label:<Typography variant="subheading">Subpar</Typography>
    },
    3: {
        label:<Typography variant="subheading">Average</Typography>
    },
    4: {
        label:<Typography variant="subheading">Good</Typography>
    },
    5: {
        label:<Typography variant="subheading">Excellent</Typography>
    }
};

function log(value) {
    console.log(value);
}

class RangeSlider extends React.Component {

    render() {
        return (
            <div style={style}>
                <Slider min={1} max={5} marks={marks} step={null} onChange={log} defaultValue={1}/>
            </div>
        )
    }
}

export default RangeSlider