//Here we have to crate the form and submit values.
import React, {useState, useEffect} from 'react'
import useStyle from './style'

import {TextField, Button, Typography, Paper, FormControl} from "@material-ui/core";


const Register = () => {
    const classes = useStyle();

    //Methods comes here.
    const [ userData , setUserData] = useState([
        {
            firstName: '',
            lastName: ''
        }
    ]);
    function handleSubmit() {
      //Submit values
    }
    useEffect (() => {

    },[])

    return (<React.Fragment>
        <div style={{marginTop:"50%" , width:"90%",padding:"10px"}}>
        <Paper>
            <h1 className={classes.h1}> Registration Form</h1>
            <form onSubmit={handleSubmit} className={classes.form}>
                <TextField
                    name= "firstName"
                    label= "First Name"

                >

                </TextField>

                <TextField
                    name= "LastName"
                    label= "Last Name"
                >

                </TextField>
                <Button
                    name ="submit"
                    className={classes.submitButton}
                    color= "secondary"
                > Submit </Button>
            </form>
        </Paper>
        </div>
    </React.Fragment>)
}

export default Register;
