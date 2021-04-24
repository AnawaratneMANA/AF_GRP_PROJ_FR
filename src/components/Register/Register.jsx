//Here we have to crate the form and submit values.

import React, {useState, useEffect} from 'react'
import useStyle from './style'
import {useDispatch , useSelector} from 'react-redux';

import {TextField, Button, Typography, Paper, FormControl} from "@material-ui/core";


const Register = () => {
    const classes = useStyle();
    const dispatch = useDispatch();

    //Methods comes here.
    const [userData, setUserData] = useState(
        {
            firstName: '',
            lastName: ''
        }
    );

    function handleSubmit() {
      //Submit values
    }

    useEffect(() => {

    }, [])

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
                        name="LastName"
                        label="Last Name"
                        variant="outlined"
                        fullwidth
                        value={userData.lastName}
                        onChange={(e) => setUserData({...userData, creator: e.target.value})}>
                    </TextField>


                    <Button
                        name="submit"
                        className={classes.submitButton}
                        color="secondary"
                    > Submit </Button>
                </form>
            </Paper>
        </div>
    </React.Fragment>)
}

export default Register;
