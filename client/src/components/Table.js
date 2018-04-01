import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        // minWidth: 700,
    },
    row:{
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    }
});

let id = 0;
function createData(one, two, three) {
    id += 1;
    return { id, one, two, three};
}

const data = [
    createData('Property Details', 'Original', 'Adjustment'),
    createData('Square Feet', 1,712, ''),
    createData('Lot Size', 7,195, ''),
    createData('Beds', 4, ''),
    createData('Baths', 2.5, '')
];

function SimpleTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableBody>
                    {data.map(n => {
                        return (
                            <TableRow className={classes.row} key={n.id}>
                                <CustomTableCell>{n.one}</CustomTableCell>
                                <CustomTableCell numeric>{n.two}</CustomTableCell>
                                <CustomTableCell numeric>{n.three}</CustomTableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);