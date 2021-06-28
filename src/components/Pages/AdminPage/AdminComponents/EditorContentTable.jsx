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

const useStyles = makeStyles({
    table: {
        minWidth: 1350,
    },
});

function createData(id, name, organizor, type) {
    return { id, name, organizor, type};
}
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24),
    createData('Ice cream sandwich', 237, 9.0, 37),
    createData('Eclair', 262, 16.0, 24),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
];


function EditorContentTable({method, setvalue}) {
    const classes = useStyles();

    // const [switchChange, setSwitchChange] = useState(false);
    // const SwitchChangeMethod = (switchChange) => {
    //     setSwitchChange(switchChange);
    //     if(switchChange){
    //         console.log("Trye: " + switchChange);
    //     }else{
    //         console.log("Tryef: " + switchChange);
    //     }
    // }
    return (
        <div>
            <TableContainer component={Paper} className="editorcontent" >
                <h1>Editor Content Table</h1>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Event id</TableCell>
                            <TableCell align="right">Event Name</TableCell>
                            <TableCell align="right">Organizor Name</TableCell>
                            <TableCell align="right">Event type</TableCell>
                            <TableCell align="right">Status (Approve/ Reject)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row"> {row.id}</TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.organizor}</TableCell>
                                <TableCell align="right">{row.type}</TableCell>
                                <TableCell align="right">
                                    <Switch
                                        className="react-switch"
                                        onChange = {method}
                                        checked= { (value) => {setvalue(value)}}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default EditorContentTable
