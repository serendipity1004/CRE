import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        // minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    }
});

class SimpleTable extends React.Component {
    render() {
        const {classes} = this.props;

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow style={{backgroundColor:'#F1F1F1'}}>
                            {Object.keys(this.props.data[0]).map(item => (
                                <TableCell padding="none" style={{fontWeight:'bold'}}>{item}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.data.map((item, index) => {
                                let keys = Object.keys(item);

                                let row = keys.map(key => (<TableCell padding="none">{item[key]}</TableCell>))

                                return (
                                    <TableRow key={index}>
                                        {row}
                                    </TableRow>
                                )
                            }
                        )}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);