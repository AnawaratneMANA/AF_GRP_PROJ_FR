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

    return (
        <Route
            {...rest}
            render={
                (props) => {
                    console.log("Above the if " + Auth.isAuthenticated());
                    if (users.userName) {
                        console.log("If" + Auth.isAuthenticated());
                        return <Component {...rest}/>;
                    } else {
                        console.log("Else" + Auth.isAuthenticated());
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
