import React, {useState, useEffect} from 'react';
import {Form, Button, h1} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {createUser} from "../../actions/users";
import {Container, Paper} from '@material-ui/core';
import '../../CSS/registerstyle.css';
const Register = () => {
    const dispatch = useDispatch();
    //Methods comes here.
    const [userData, setUserData] = useState(
        {
            firstName: '',
            lastName: ''
        }
    );

    function handleSubmit(e) {
        e.preventDefault();
        console.log(userData);
        dispatch(createUser(userData));
    }

    return (
        <div className="RegisterPage">
        <div className="register-component">
          <div className="login-border">
              <div className="header">
                  <h2 className="main-header">Register</h2>
                  <h4 className="second-header">Information</h4>
              </div>
            </div>
            <div className="login-body">
              <div className="input-wrapper">
                <lable>User name</lable><br/>
                <input className="input-field" placeholder="Enter Name..." type="text"></input>
                <br/>
              </div>
              <div className="input-wrapper">
                <lable>E-mail</lable><br/>
                <input className="input-field" placeholder="Enter Email..." type="text"></input>
                <br/>
              </div>
              <div className="input-wrapper">
                <lable>Password</lable><br/>
                <input className="input-field" placeholder="Enter Password..." type="password"></input>
                <br/>
              </div>
              <div className="input-wrapper">
                <lable>Re-Password</lable><br/>
                <input className="input-field" placeholder="Re-enter Password..." type="password"></input>
                <br/>
              </div>
            <div className="button-group">
              <button className="auth-button">Registration</button><br/>
              <button className= "auth-button">Login</button>
            </div>
            </div>
        </div>
      </div>
    
    )

}

export default Register;
