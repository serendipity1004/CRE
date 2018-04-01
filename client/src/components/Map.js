import React from 'react';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    root: {
        width:'100%',
        height:'100%'
    }
});

class Map extends React.Component{
    constructor(props){
        super(props);

        this.map = '';
    }

    componentDidMount(){
        let options = {
            center: new window.daum.maps.LatLng(33.450701, 126.570667),
            level: 3
        };

        let map = new window.daum.maps.Map(this.map, options);
    }

    render(){
        const {classes} = this.props;

        return(
            <div className={classes.root} ref={item => this.map = item}>

            </div>
        )
    }
}

export default withStyles(styles)(Map);