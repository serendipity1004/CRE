import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Appbar from '../components/Appbar';
import SidebarList from '../components/SidebarList';
import Map from '../components/Map';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import DownloadIcon from 'material-ui-icons/FileDownload';
import ReportIcon from 'material-ui-icons/Assignment';
import RangeSlider from '../components/RangeSlider';
import Table from '../components/Table';
import LineChart from '../components/LineChart';

const styles = theme => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    root: {
        height: '100%'
    },
    mapContainerGrid: {
        height: 500,
        width: '100%',
        marginTop: 5
    },
    mapContainer: {
        width: '90%'
    },
    detailsContainer: {
        padding: 50
    },
    subheading: {
        fontWeight: 'bold'
    },
    vertDivider: {
        borderLeft: '1px solid #38546d',
        borderRight: '1px solid #16222c',
        height: '80px',
        position: 'absolute',
        right: '249px',
        top: '10px;'
    },
    dividerRight: {
        borderRight: '1px solid #16222c',
    },
    detailBold: {
        fontWeight: 'bold'
    },
    gap75: {
        margin: 75
    },
    gap50: {
        margin: 50
    },
    gap25: {
        margin: 25
    },
    gap150: {
        margin: 150
    },
    paddedCol: {
        padding: '0 50px 0 50px'
    }
});

class TemporaryDrawer extends React.Component {
    state = {
        openDrawer: false,
    };

    constructor(props) {
        super(props);

        this.onDrawerClick = this.onDrawerClick.bind(this);

    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    onDrawerClick() {
        this.setState({
            openDrawer: true
        })
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Appbar onDrawerClick={this.onDrawerClick}/>
                <Drawer open={this.state.openDrawer} onClose={this.toggleDrawer('openDrawer', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('openDrawer', false)}
                        onKeyDown={this.toggleDrawer('openDrawer', false)}
                    >
                        <SidebarList/>
                    </div>
                </Drawer>
                <Grid container justify="center" className={classes.mapContainerGrid}>
                    <div className={classes.mapContainer}>
                        <Map/>
                    </div>
                </Grid>
                <Grid container justify="center" className={classes.detailsContainer}>
                    <div style={{width: '70%'}}>
                        <Grid container justify="center">
                            <Grid item xs={6} className={classes.dividerRight}>
                                <Typography variant="subheading" align="center" className={classes.subheading}>
                                    Adjusted Value :
                                </Typography>
                                <Typography variant="display3" align="center">
                                    $269,379
                                </Typography>
                                <Grid container justify="center" style={{marginTop: 25}}>
                                    <Button variant="raised" color="primary">
                                        Share Report
                                    </Button>
                                    <DownloadIcon style={{fill: '#4054B2', height: '36px', marginLeft: '10px'}}/>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} style={{paddingLeft: 50}}>
                                <Typography variant="title" className={classes.detailBold}
                                            style={{marginBottom: 25, display: 'inline-block'}}>
                                    <ReportIcon
                                        style={{height: '1em', width: '1em', verticalAlign: 'middle', marginRight: 5}}/>Value
                                    Report
                                </Typography>
                                <Typography variant="title" className={classes.detailBold}
                                            style={{fontSize: '2.0em', marginBottom: 10}}>
                                    3807 Bellewater Blvd
                                </Typography>
                                <Typography variant="subheading" className={classes.detailBold}>
                                    Riverview, FL 33578
                                </Typography>
                                <Typography variant="subheading" className={classes.detailBold}>
                                    Single Family Detached|4 Beds|2.5 Baths|1,712 Sq.Ft.
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid container justify="center">
                    <Divider style={{width: '80%', margin: '25px 0 25px 0'}}/>
                </Grid>
                <Grid container justify="center" className={classes.detailsContainer}>
                    <div style={{width: '70%'}}>
                        <Grid container justify="center">
                            <Grid item xs={6}>
                                <div className={classes.paddedCol}>
                                    <Typography variant="title" className={classes.detailBold}>
                                        Adjust Home Condition :
                                    </Typography>
                                    <div className={classes.gap50}>
                                    </div>
                                    <RangeSlider/>
                                    <div className={classes.gap50}></div>
                                    <Typography variant="title" className={classes.detailBold}>
                                        Property Details :
                                    </Typography>
                                    <Table/>
                                </div>
                            </Grid>
                            <Grid item xs={6} className={classes.paddedCol}>
                                <div className={classes.paddedCol}>
                                    <Typography variant="title" className={classes.detailBold}>
                                        CRE Forecast :
                                    </Typography>
                                    <div className={classes.gap25}></div>
                                    <Typography variant="subheading">
                                        Our Zip-Code-level forecast shows how this home is likely to appreciate in the
                                        next
                                        36 months based on the rate of home price growth in the Zip-Code.
                                    </Typography>
                                    <LineChart/>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </div>
        );
    }
}

TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);