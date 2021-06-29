import React, {useEffect, useState} from 'react'
import '../AdminPage.scss'
import {FormControl, Grid, InputLabel, MenuItem, Select, TextField} from '@material-ui/core';
import {Paper, makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from 'react-redux';
import axios from "axios";
const useStyles = makeStyles(theme => ({
    pageContent: {
        // margin: theme.spacing(5),
        padding: theme.spacing(3),
        margin: theme.spacing(2),
        width: theme.spacing(70),
        height: theme.spacing(90)
    }
}))

const useStyle = makeStyles(theme => ({
    root:{
        '& .MuiFormControl-root':{
            width: theme.spacing(50),
            margin:theme.spacing(2)
        }
    }
}))

function UserdetailForm({value}){
    console.log(value);
    axios.interceptors.request.use(
        config => {
            config.headers.authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.' +
                'eyJzdWIiOiJBa2FzaCIsInVzZXJUeXBlIjoieXl5dXUiLCJleHAiOj' +
                'E2MjQ5ODc3MzgsImlhdCI6MTYyNDk1MTczOH0.jvY3apk1gVawe043cHNBhcLPGBk8mQgjHTcGrG3A3lY';
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    )
    const classes = useStyles();
    const classes2 = useStyle();
    const dispatch = useDispatch();
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastname] = useState("");
    const[userName, setUserName] = useState("");
    const[password, setPassword] = useState("");
    const[type, setType] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.userName);
        const userData = {
            firstName,
            lastName,
            userName,
            password,
            type

        }

        console.log(userData);
        // axios.put('http://localhost:8073/updateCreditCardDetailsById/'+this.props.match.params.id, payment).then(() => {
        //     alert("payment updated");
        //     window.location = '/payment';
        // }).catch((err) => {
        //     console.log(err);
        // })
        //call the url
        // dispatch()

    }


    return (
        <Paper className={classes.pageContent}>
            <h3>User Entry Form</h3>
            <form className={classes2.root} onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={6}>
                        <InputLabel> First Name</InputLabel>
                        <TextField
                            variant="outlined"
                            name="firstName"
                            defaultValue={value.firstName}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <InputLabel> Last Name</InputLabel>
                        <TextField
                            variant="outlined"
                            name="lastName"
                            label="last name"
                            defaultValue={value.lastName}
                            value={lastName}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                        <InputLabel> User Name</InputLabel>
                        <TextField
                            variant="outlined"
                            name="userName"
                            defaultValue={value.userName}
                            value={value.userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <InputLabel> Password</InputLabel>
                        <TextField
                            variant="outlined"
                            name="password"
                            type="password"
                            defaultValue={value.password}
                            value={value.password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <InputLabel> Type </InputLabel>
                        <FormControl variant="outlined" >
                            <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                defaultValue={value.type}
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                label="Age"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Reviewer</MenuItem>
                                <MenuItem value={20}>Admin</MenuItem>
                                <MenuItem value={30}>Researcher</MenuItem>
                                <MenuItem value={30}>Editor</MenuItem>
                            </Select>
                        </FormControl>
                        <Button variant="contained" type='Submit' style={{background: "#1976d2", color:"white", width:"150px", marginLeft:"13px"}} >
                            SUBMIT
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>



    )
}

export default UserdetailForm
