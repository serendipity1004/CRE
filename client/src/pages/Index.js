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
import HomeIcon from 'material-ui-icons/Home';
import BuildingIcon from 'material-ui-icons/LocationCity';
import AssessmentIcon from 'material-ui-icons/Assessment';
import AreaIcon from 'material-ui-icons/AspectRatio';
import TransportIcon from 'material-ui-icons/DirectionsCar';
import LayersIcon from 'material-ui-icons/Layers';
import TriangleIcon from 'material-ui-icons/SignalCellularNull';
import TrendingIcon from 'material-ui-icons/TrendingUp';
import BarChart from '../components/BarChart';
import ExpansionPanel from '../components/ExpansionPanel';

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
        marginTop: 75,
        marginBottom: 75
    },
    gap50: {
        marginTop: 50,
        marginBottom: 50
    },
    gap25: {
        marginTop: 25,
        marginBottom: 25
    },
    gap10:{
        marginTop: 10,
        marginBottom: 10
    },
    gap150: {
        marginTop: 150,
        marginBottom: 150
    },
    paddedCol: {
        padding: '0 50px 0 50px'
    },
    subheading: {
        padding: '20px 0 20px 0',
        fontWeight: 'bold'
    },
    noWrap: {
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    }
});

const propDetails = {
    left: [
        {
            key: '신축년도',
            value: '1998년 02월 27일'
        },
        {
            key: '주용도',
            value: '업무시설'
        },
        {
            key: '지붕',
            value: '(철근)콘크리트'
        },
        {
            key: '건폐율',
            value: '52.569%'
        },
        {
            key: '주차장',
            value: '268대'
        }
    ],
    right: [
        {
            key: '연면적',
            value: '62,747,67(m2)'
        },
        {
            key: '주구조',
            value: '철골철근콘크리트구조'
        },
        {
            key: '규모',
            value: '지상4/지하'
        },
        {
            key: '용적률',
            value: '981,065%'
        },
        {
            key: '승강기',
            value: 13
        }
    ]
};

const landInfo = [
    {
        icon: <HomeIcon/>,
        heading: '지목',
        subheading: '대'
    },
    {
        icon: <BuildingIcon/>,
        heading: '이용상황',
        subheading: '업무용'
    },
    {
        icon: <AssessmentIcon/>,
        heading: '용도지역',
        subheading: '일반상업'
    },
    {
        icon: <AreaIcon/>,
        heading: '면적',
        subheading: '4,171m2'
    },
    {
        icon: <TransportIcon/>,
        heading: '도로',
        subheading: '광대세각'
    },
    {
        icon: <LayersIcon/>,
        heading: '형상',
        subheading: '사다리형'
    },
    {
        icon: <TriangleIcon/>,
        heading: '지세',
        subheading: '평지'
    },
    {
        icon: <TrendingIcon/>,
        heading: '공시지가(m2)',
        subheading: '35,170,000'
    },
];

const predictionSeries = [
    {
        year: 1,
        percent: '+6.2%',
        amount: '$268,710'
    },
    {
        year: 2,
        percent: '+8.6%',
        amount: '$293,492'
    },
    {
        year: 3,
        percent: '+7.4%',
        amount: '$290,163'
    },
    {
        year: 4,
        percent: '+6.2%',
        amount: '$286,710'
    },
    // {
    //     year:5,
    //     percent:'+6.2%',
    //     amount:'$268,710'
    // },
    // {
    //     year:6,
    //     percent:'+7.2%',
    //     amount:'$276,190'
    // }
];

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
                                    <Typography variant="title" className={classes.subheading}>
                                        건물정보
                                    </Typography>
                                    <Grid container>
                                        <Grid item md={6}>
                                            {propDetails.left.map(item => (
                                                <div>
                                                    <Grid container justify="space-between">
                                                        <Grid item md={6}>
                                                            <Typography variant="subheading"
                                                                        className={classes.noWrap}
                                                                        style={{fontWeight: 'bold'}}>{item.key}</Typography>
                                                        </Grid>
                                                        <Grid item md={6}>
                                                            <Typography variant="subheading"
                                                                        className={classes.noWrap}>{item.value}</Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <hr/>
                                                </div>
                                            ))}
                                        </Grid>
                                        <Grid item md={6}>
                                            {propDetails.right.map(item => (
                                                <div>
                                                    <Grid container justify="space-between">
                                                        <Grid item md={6}>
                                                            <Typography variant="subheading"
                                                                        className={classes.noWrap}
                                                                        style={{fontWeight: 'bold'}}>{item.key}</Typography>
                                                        </Grid>
                                                        <Grid item md={6}>
                                                            <Typography variant="subheading"
                                                                        className={classes.noWrap}>{item.value}</Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <hr/>
                                                </div>
                                            ))}
                                        </Grid>
                                    </Grid>
                                    <Typography variant="title" className={classes.subheading}>
                                        토지정보
                                    </Typography>
                                    <Grid container justify="space-between">
                                        {landInfo.map(item => (
                                            <Grid xs={3} style={{display: 'inline', paddingBottom: 10}}>
                                                <Grid container>
                                                    <Grid item xs={2}>
                                                        {item.icon}
                                                    </Grid>
                                                    <Grid item xs={10} style={{paddingLeft: 20}}>
                                                        <Grid container direction="column">
                                                            <Grid item xs={6}>
                                                                <Typography variant="subheading" style={{
                                                                    fontSize: '0.85em',
                                                                    fontWeight: 'bold'
                                                                }}>{item.heading}</Typography>
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                <Typography variant="subheading"
                                                                            style={{fontSize: '0.7em'}}>{item.subheading}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        ))}
                                    </Grid>
                                    <Typography variant="title" className={classes.subheading}>
                                        동정보
                                    </Typography>
                                    <Table
                                        data={
                                            [
                                                {
                                                    건물명칭: 'ARC PLACE',
                                                    동: '-',
                                                    주용도: '업무시설',
                                                    주구조: '철골철근콘크리트구조',
                                                    연면적: '62,747.67(m2)',
                                                    사용승인일: '1998.02.27'
                                                }
                                            ]
                                        }
                                    />
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
                                    <div>
                                        <LineChart height={400}/>
                                    </div>
                                    <div className={classes.gap25}></div>
                                    <Grid container justify="space-between">
                                        {predictionSeries.map(item => (
                                            <Grid item md={3}>
                                                <Grid container direction="column" alignItems="center">
                                                    <Typography style={{fontWeight: 'bold'}} variant="subheading"
                                                                align="center">
                                                        {item.year + ' Year'}
                                                    </Typography>
                                                    <Button variant="raised" color="primary">
                                                        {item.percent}
                                                    </Button>
                                                    <Typography variant="subheading" align="center">
                                                        {item.amount}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        ))}
                                    </Grid>
                                    <div className={classes.gap25}></div>
                                    <Typography variant="title" style={{fontWeight: 'bold'}}>
                                        See What Similar CRE Buildings sold for in the Area
                                    </Typography>
                                    <div className={classes.gap25}></div>
                                    <BarChart/>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid container justify="center" className={classes.detailsContainer}>
                    <div style={{width: '70%'}}>
                        <Typography variant="title" className={classes.gap25} style={{fontWeight:'bold'}}>
                            Details :
                        </Typography>
                        <Grid container justify="space-between">
                            <Grid item md={6}>
                                <ExpansionPanel
                                    data={
                                        [
                                            {
                                                title: '업종 현황',
                                                details: function () {
                                                    return (
                                                        <Grid container direction="column" alignItems="center"
                                                              justify="center">
                                                            <Typography variant="subheading" align="center" style={{fontWeight:'bold'}}>
                                                                "이 건물에는 현제 이런 업종이 영업중입니다"
                                                            </Typography>
                                                            <div className={classes.gap10}></div>
                                                            <Grid container justify="center">
                                                                <img
                                                                    src={require('../resources/imgs/seveneleven.png')}
                                                                    style={{width: 50, height: 50}}/>
                                                                <img
                                                                    src={require('../resources/imgs/starbucks.png')}
                                                                    style={{width: 50, height: 50}}/>
                                                                <img
                                                                    src={require('../resources/imgs/weworklogo.jpg')}
                                                                    style={{width: 200, height: 50}}/>
                                                            </Grid>
                                                            <div className={classes.gap10}></div>
                                                            <Typography variant="subheading">
                                                                총 3개업소 2017.3분기 기준
                                                            </Typography>
                                                            <div className={classes.gap25}></div>
                                                            <Table
                                                                data={[
                                                                    {
                                                                        층:1,
                                                                        호:'-',
                                                                        상호명:'세븐일레븐캐피탈타워점(캐피탈타워점)',
                                                                        업종소분류:'편의점'
                                                                    },
                                                                    {
                                                                        층:2,
                                                                        호:'-',
                                                                        상호명:'스타벅스(한솥빌딩점)',
                                                                        업종소분류:'커피전문점/카페/다방'
                                                                    },
                                                                    {
                                                                        층:17,
                                                                        호:'-',
                                                                        상호명:'데상트스포츠재단',
                                                                        업종소분류:'일반의류'
                                                                    }
                                                                ]}
                                                            />
                                                        </Grid>
                                                    );
                                                }()
                                            }
                                        ]
                                    }
                                />
                            </Grid>
                            <Grid item md={6}>
                                <ExpansionPanel
                                    data={[
                                        {
                                            title:'층별정보 자세히 보기',
                                            details:function () {
                                                return(
                                                    <Table
                                                        data={[
                                                            {
                                                                층:'1층',
                                                                구조:'일반절골구조',
                                                                비고:'주차장',
                                                                면적:'2,189.26m2'
                                                            },
                                                            {
                                                                층:'2층',
                                                                구조:'일반절골구조',
                                                                비고:'주차장',
                                                                면적:'2,189.26m2'
                                                            },
                                                            {
                                                                층:'3층',
                                                                구조:'일반절골구조',
                                                                비고:'주차장',
                                                                면적:'2,189.26m2'
                                                            },
                                                            {
                                                                층:'4층',
                                                                구조:'일반절골구조',
                                                                비고:'주차장',
                                                                면적:'2,189.26m2'
                                                            },
                                                            {
                                                                층:'5층',
                                                                구조:'일반절골구조',
                                                                비고:'주차장',
                                                                면적:'2,189.26m2'
                                                            },
                                                            {
                                                                층:'6층',
                                                                구조:'일반절골구조',
                                                                비고:'주차장',
                                                                면적:'2,189.26m2'
                                                            },
                                                            {
                                                                층:'7층',
                                                                구조:'일반절골구조',
                                                                비고:'주차장',
                                                                면적:'2,189.26m2'
                                                            },
                                                            {
                                                                층:'8층',
                                                                구조:'일반절골구조',
                                                                비고:'주차장',
                                                                면적:'2,189.26m2'
                                                            },
                                                            {
                                                                층:'9층',
                                                                구조:'일반절골구조',
                                                                비고:'주차장',
                                                                면적:'2,189.26m2'
                                                            }
                                                        ]}
                                                    />
                                                )
                                            }()
                                        }
                                    ]}
                                />
                            </Grid>
                            <Typography variant="title" className={classes.gap25} style={{fontWeight:'bold'}}>
                                Property History :
                            </Typography>
                            <Table
                                data={[
                                    {
                                        Event:'Sold',
                                        Price:'$238,000',
                                        Date:'Jul 10, 2017',
                                        Source:'Public Records'
                                    },
                                    {
                                        Event:'Listed',
                                        Price:'$238,000',
                                        Date:'May 31, 2017',
                                        Source:'MLS'
                                    },
                                    {
                                        Event:'Sold',
                                        Price:'170,000',
                                        Date:'Mar 5, 2013',
                                        Source:'Public Records'
                                    }
                                ]}
                            />

                        </Grid>
                        <Grid container justify="center" className={classes.mapContainerGrid}>
                            <div style={{width:'100%'}}>
                                <Typography variant="title" className={classes.gap25} style={{fontWeight:'bold'}}>
                                    Sold & Active Comparables
                                </Typography>
                                <Map/>
                            </div>
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