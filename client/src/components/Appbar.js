import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import {FormControl, FormHelperText} from 'material-ui/Form';
import Input, {InputLabel} from 'material-ui/Input';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    appbar: {
        backgroundColor: '#FFFFFF',
        color: '#4a4a4a'
    },
    menuIcon: {
        fill: '#4a4a4a'
    },
    searchInput: {
        width: 300
    }
};

class Appbar extends React.Component {
    constructor(props) {
        super(props);

        this.onDrawerClick = this.onDrawerClick.bind(this);
    }

    onDrawerClick() {
        this.props.onDrawerClick()
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.appbar}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon onClick={this.onDrawerClick} className={classes.menuIcon}/>
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            CRE
                        </Typography>
                        <form className={classes.root} autoComplete="off">
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="nav-search-input">Search For an Address</InputLabel>
                                <Input id="nav-search-input" className={classes.searchInput}/>
                                <FormHelperText></FormHelperText>
                            </FormControl>
                        </form>

                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Appbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Appbar);