import React, {useEffect, useState} from 'react'
import { Route, Redirect } from  'react-router-dom';
import Auth from "./AuthenticationClass";
import {useSelector} from "react-redux";
export const ProtectedRoute = ({component: Component, ...rest}) => {

    //Global Redux State to keep the user details.
    const users = useSelector((state) => state.users);

    /**
     * Becarefull using useStates without useEffect hook, can end up creating infinite loops
     * When loading the components, when setting the state component get reload once.
     * **/

    //Testing
    console.log(users);

    //Considering LocalStorage (Refresh Fix)
    var flag = false;
    flag = !(localStorage.getItem("userName") === null || localStorage.getItem("userName") === undefined);

    //Testing.
    console.log(flag)
    const vari = localStorage.getItem("userName")
    console.log(vari)


    return (
        <Route
            {...rest}
            render={
                (props) => {
                    if (users.userName) {
                        return <Component {...rest}/>;
                    } else {
                        return (<Redirect to={
                            {
                                pathname: "/loginpage",
                                state: {
                                    from: props.location
                                }
                            }
                        }/>);
                    }
                }
            }
        />
    );
};

/*
	This is where the authentication validation happens.
	If Authenticated properly then forward to the Route
	If not then return to a default route that we define.
	(Usually the return route will be either the landing page or the home route).
*/
