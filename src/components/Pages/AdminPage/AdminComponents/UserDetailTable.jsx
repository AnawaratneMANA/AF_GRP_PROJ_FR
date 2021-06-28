import '../AdminPage.scss'
import React, { useState, useEffect } from 'react';
import Switch from 'react-switch'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button, Link} from "@material-ui/core";

const useStyles = makeStyles({
    table: {
        minWidth: 600,

    },
});

function createData(name, type, id) {
    return { name, type, id};
}
const rows = [
    createData('Frozen yoghurt', 159, 6.0),
    createData('Ice cream sandwich', 237, 9.0),
    createData('Eclair', 262, 16.0),
    createData('Cupcake', 305, 3.7),
    createData('Gingerbread', 356, 16.0),
];

function UserDetailTable() {
    const classes = useStyles();

    const [switchChange, setSwitchChange] = useState(false);
    const SwitchChangeMethod = (switchChange) => {
        setSwitchChange(switchChange);
        if(switchChange){
            console.log("Trye: " + switchChange);
        }else{
            console.log("Tryef: " + switchChange);
        }
    }
    return (
        <div>
            <TableContainer component={Paper} className="userdetailtable" >
                <h3>User detail Table</h3>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Full Name</TableCell>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="right">Update</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row"> {row.name}</TableCell>
                                <TableCell align="right">{row.type}</TableCell>
                                <TableCell align="right">
                                    <Link> <p>Update</p> </Link>
                                </TableCell>
                                <TableCell align="right">
                                    <Link> <p>Delete</p> </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default UserDetailTable
