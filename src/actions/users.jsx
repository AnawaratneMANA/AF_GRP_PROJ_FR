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
export const logoutUser = () => async (dispatch) => {
    try {
        dispatch({type: 'LOG_OUT', payload: null});
    } catch (error) {
        console.log(error);
    }
};
