import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import '../../CSS/registerstyle.css';
import { useHistory } from "react-router-dom";
import useForm from './useForm';
import validate from './validateInfo';
const Register = () => {

    const dispatch = useDispatch();
    //Using a Custom Hook to validate the form.
    const {handleChange, values, handleSubmit, errors} = useForm(validate);

    const history = useHistory();

    function navigation(e) {
        //Redirect the user another page.
        history.push("/loginpage");
    }

    /**
     * Automatically Redirect the user to the Login.
     *
     * **/


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
                                name="userName"
                                value={values.userName}
                                onChange={handleChange}
                            />
                            {errors.username && <p className="error-message">{errors.username}</p>}
                            <br/>
                        </div>
                        <div className="input-wrapper">
                            <lable>E-mail</lable>
                            <br/>
                            <input
                                className="input-field"
                                placeholder="Enter Email..."
                                type="text"
                                name="email"
                                value={values.email}
                                onChange={handleChange}/>
                            {errors.email && <p className="error-message">{errors.email}</p>}
                            <br/>
                        </div>
                        <div className="input-wrapper">
                            <lable>Password</lable>
                            <br/>
                            <input
                                className="input-field"
                                placeholder="Enter Password..."
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}/>
                            {errors.password && <p className="error-message">{errors.password}</p>}
                            <br/>
                        </div>
                        <div className="input-wrapper">
                            <lable>Re-Password</lable>
                            <br/>
                            <input
                                className="input-field"
                                placeholder="Re-enter Password..."
                                type="password"
                                name="password2"
                                value={values.password2}
                                onChange={handleChange}/>
                            {errors.password2 && <p className="error-message">{errors.password2}</p>}
                            <br/>
                        </div>
                        <div className="button-group">
                            <button className="auth-button" type="submit">Registration</button>
                            <br/>
                            <button className="auth-button"> Login </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    
    )

}

export default Register;
