import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux";
const TestingEmptyComponent = () => {
    const users = useSelector((state) => state.users);
    const [flag, setFlag] = useState(null)

    //Add this to protected Components to avoid unauthorized users from comming.
    useEffect(()=> {
        if(users.userType === "admin"){
            window.location.href='/loginpage';
        } else {
            setFlag(true);
        }
    }, [])

    if(!flag){
        return null;
    }

    return (
        <div className="testing-dev">
            This is a Empty Component Do Not add Data.
        </div>
    )
}
export default TestingEmptyComponent;
