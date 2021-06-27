import React, {useState, useEffect} from 'react';
import {Form, Button, h1} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {createUser} from "../../actions/users";
import {Container, Paper} from '@material-ui/core';
import '../../CSS/registerstyle.css';
import {Redirect} from "react-router-dom";
import { useHistory } from "react-router-dom";
const Register = () => {
    const dispatch = useDispatch();
    const [redirect, setRedirect] = useState(false);
    //States for the passwords.
    const [password, setPassword] = useState();
    const [rpassword, setrPassword] = useState();
    const [userData, setUserData] = useState(
        {
            name: '',
            email: '',
        }
    );

    const history = useHistory();


    function handleSubmit(e) {
        e.preventDefault();
        console.log(userData);
        //dispatch(createUser(userData));
        setRedirect(true);
    }

    /**
     * Automatically Redirect the user to the Login.
     * **/
    if(redirect){
        return <Redirect to="/loginpage"/>
    }

    return (
        <div className="RegisterPage">
            <form onSubmit={handleSubmit}>
                <div className="register-component">
                    <div className="login-border">
                        <div className="header">
                            <h2 className="main-header">Register</h2>
                            <h4 className="second-header">Information</h4>
                        </div>
                    </div>
                    <div className="login-body">
                        <div className="input-wrapper">
                            <lable>User name</lable>
                            <br/>
                            <input
                                className="input-field"
                                placeholder="Enter Name..."
                                type="text"
                                value={userData.name}
                                onChange={(e) => setUserData({...userData, name: e.target.value})}
                            ></input>
                            <br/>
                        </div>
                        <div className="input-wrapper">
                            <lable>E-mail</lable>
                            <br/>
                            <input
                                className="input-field"
                                placeholder="Enter Email..."
                                type="text"
                                value={userData.email}
                                onChange={(e) => setUserData({...userData, email: e.target.value})}
                            ></input>
                            <br/>
                        </div>
                        <div className="input-wrapper">
                            <lable>Password</lable>
                            <br/>
                            <input
                                className="input-field"
                                placeholder="Enter Password..."
                                type="password"
                                value={userData.name}
                                onChange={(e) => setUserData({...userData, password: e.target.value})}
                            ></input>
                            <br/>
                        </div>
                        <div className="input-wrapper">
                            <lable>Re-Password</lable>
                            <br/>
                            <input
                                className="input-field"
                                placeholder="Re-enter Password..."
                                type="password"
                            ></input>
                            <br/>
                        </div>
                        <div className="button-group">
                            <button className="auth-button" type="submit">Registration</button>
                            <br/>
                            <button className="auth-button">Login</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    
    )

}

export default Register;
