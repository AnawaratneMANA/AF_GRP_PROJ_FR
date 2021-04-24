export default (users = [], action) => {
    switch(action.type){
        case 'UPDATE':
            return users;
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...users, action.payload];
        default:
            return users;
    }
}

