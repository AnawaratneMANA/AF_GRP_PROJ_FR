//User Actions
//Import API
//Adding users to the database.
import * as api from '../api';

//Dispatch method for user login.
export const loginUser = (user) => async (dispatch) => {
    try {
        dispatch({type: 'LOG_IN', payload: user});
    } catch (error) {
        console.log(error);
    }
};

//Dispatch method for user log out.
export const logoutUser = (users) => async (dispatch) => {
    try {
        dispatch({type: 'LOG_OUT', payload: users});
    } catch (error) {
        console.log(error);
    }
};

//Dispatch method for user log out.
export const RegisterUser = (users) => async (dispatch) => {
    try {
        dispatch({type: 'REG', payload: users});
    } catch (error) {
        console.log(error);
    }
};
