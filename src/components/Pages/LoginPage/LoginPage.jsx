import './style.css'
import React from 'react'
import Login from "../../Login/Login";
const LoginPage = () => {
    return (
        <table>
            <tr>
                <td><img className= "loginImage"  src={require("./images/img1.jpg")} alt="CONF_IMG"/></td>
                <td className= "td-login"><Login/></td>
            </tr>
        </table>
    )
}
export default LoginPage;
