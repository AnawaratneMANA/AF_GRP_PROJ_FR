export default (users = {}, action) => {
    switch(action.type){
        case 'UPDATE':
            return users;
        case 'FETCH_ALL':
            return action.payload;
        case "LOG_IN":
            return action.payload;
        case "LOG_OUT":
            return null;
        default:
            return users;
    }
}

