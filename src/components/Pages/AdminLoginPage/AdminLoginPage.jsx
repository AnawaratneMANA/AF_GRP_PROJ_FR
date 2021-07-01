import './style.css'
import React from 'react'
import Login from "../../Login/Login";
import PaymentPage from "../PaymentPage/PaymentPage";
import AdminLogin from "./AdminLoginComponent/AdminLogin";
const AdminLoginPage = () => {
    return (
        <div className="loginPage">
            <table>
                <tr>
                    {/* <td><img className= "loginImage"  src={require("./images/img1.jpg")} alt="CONF_IMG"/></td> */}
                    <td className= "td-login"><AdminLogin/></td>
                </tr>
            </table>
        </div>
    )
}
export default AdminLoginPage;
