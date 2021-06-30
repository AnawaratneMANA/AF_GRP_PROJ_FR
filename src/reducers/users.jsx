export default (users = {
    "userName": null,
    "userToken": null,
    "userType": null
}, action) => {
    switch(action.type){
        case 'UPDATE':
            return users;
        case 'FETCH_ALL':
            return action.payload;
        case "LOG_IN":
            return action.payload;
        case "LOG_OUT":
            return action.payload;
        default:
            return users;
    }
}

