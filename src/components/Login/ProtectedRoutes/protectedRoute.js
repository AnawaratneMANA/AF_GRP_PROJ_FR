import React, {useState} from 'react'
import { Route, Redirect } from  'react-router-dom';
import Auth from "./AuthenticationClass";
import {useSelector} from "react-redux";
export const ProtectedRoute = ({component: Component, ...rest}) => {

    //Create UseState Hooks to store the token.
    const [token, setToken] = useState(null);
    //Extra information in case if wanted.
    const [userName, setUserName] = useState(null);
    const [userType, setUserType] = useState(null);

    //Global Redux State to keep the user details.
    const users = useSelector((state) => state.users);
    setToken(users.userToken);
    setUserName(users.userName);
    setUserType(users.userType);

    //Testing
    console.log(token);
    console.log(Auth.isAuthenticated());

    return (
        <Route
            {...rest}
            render={
                (props) => {
                    console.log("Above the if " + token);
                    if (Auth.isAuthenticated()) {
                        console.log("If" + token);
                        return <Component {...rest}/>;
                    } else {
                        console.log("Else" + token);
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
