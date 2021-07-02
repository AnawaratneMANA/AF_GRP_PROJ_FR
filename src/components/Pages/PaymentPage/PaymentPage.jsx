import React, {useState, useEffect} from 'react';
import './payment.css'
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";
import {useSelector} from "react-redux";
import emailjs from 'emailjs-com';


const PaymentPage = () => {

    //Default price
    const [price, setPrice] = useState("$ " + 50.00);

    //Getting Auth from the user state.
    const users = useSelector((state) => state.users);
    const token = users.userToken;
    const [flag, setFlag] = useState(null)
    const [paymentResponse, setPaymentResponse] = useState(null);

    //Creating  Authorization Header for Axios Requests
    axios.interceptors.request.use(
        config => {
            config.headers.authorization = `Bearer ${token}`;
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    )

    //Constructor - Validate the approaching user.
    useEffect(() => {
        if (users.userName === null) {
            window.location.href = '/loginpage';
        } else {
            setFlag(true);
        }
    }, [])

    //Flag update for the user. If Null Do not show the page.
    if (!flag) {
        return null;
    }


    //Save the transaction to the backend.
    const saveTheTransaction = async (body) => {
        console.log(body.id);
        await axios.post("http://localhost:8093/api/v1/charge", "", {
            headers: {
                token: body.id,
                amount: 50,
            }
        }).then((res) => {setPaymentResponse(res)});
    }

    //Emails Invoker method.
    const sendEmailsToCustomers = (email) => {
        //Send Email to the customer.
        const userID = 'user_vjTwqbgkFdhOFYeJufJxC';
        const templateId = 'template_7my6c7z';
        const serviceID = 'service_5zkxkh9';
        sendFeedback(serviceID, templateId, {
            from_name: "Team WE19",
            message: "Payment is done successfully",
            to_name: email
        }, userID)
    }

    //Send Emails to the customers.
    const sendFeedback = (serviceID, templateId, variables, id) => {

        emailjs.send(
            serviceID, templateId,
            variables, id
        ).then(res => {
            alert(`Email sent sucessfully`);
        })
            .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    }

    //Generate the payment token.
    const handleToken = (token, address) => {
        //Calling The DB Method.
        saveTheTransaction(token, price);
        //Printing the Token Testing.
        console.log(token.email)

        if(paymentResponse != null){
            sendEmailsToCustomers(token.email);
            alert("Payment Successfull!, Email Sent")
        } else {
            alert("Payment Error!");
        }
    }


    return (
        <div className="container payment-container">
            <div id="Checkout" className="inline">
                <h1>Pay Invoice</h1>
                <div className="card-row">
                    <span className="visa"></span>
                    <span className="mastercard"></span>
                    <span className="amex"></span>
                    <span className="discover"></span>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="PaymentAmount">Payment amount</label>
                        <div className="amount-placeholder">
                            <span>$</span>
                            <span>500.00</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label or="NameOnCard">User Name</label>
                        <input id="NameOnCard" className="form-control" type="text" maxLength="255"></input>
                    </div>
                    <div className="form-group">
                        <label or="NameOnCard">Name on card</label>
                        <input id="NameOnCard" className="form-control" type="text" maxLength="255"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="CreditCardNumber">Card number</label>
                        <input id="CreditCardNumber" className="null card-image form-control" type="text"></input>
                    </div>


                    <div className="expiry-date-group form-group">
                        <label htmlFor="ExpiryDate">Expiry date</label> <br/>
                        <select name="months" id="months">
                            <option value="Jan">Jan</option>
                            <option value="Feb">Feb</option>
                            <option value="Mar">Mar</option>
                            <option value="Apr">Apr</option>
                            <option value="May">May</option>
                            <option value="Jun">Jun</option>
                            <option value="Jul">Jul</option>
                            <option value="Aug">Aug</option>
                            <option value="Sep">Sep</option>
                            <option value="Oct">Oct</option>
                            <option value="Nov">Nov</option>
                            <option value="Dec">Dec</option>
                        </select>
                        <select name="years" id="years">
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                        </select>
                    </div>
                    <div className="security-code-group form-group">
                        <label htmlFor="SecurityCode">Security code</label>
                        <div className="input-container">
                            <input id="SecurityCode" className="form-control" type="text"></input>
                            <i id="cvc" className="fa fa-question-circle"></i>
                        </div>
                    </div>
                    <div className="zip-code-group form-group">
                        <label htmlFor="ZIPCode">ZIP/Postal code</label>
                        <div className="input-container">
                            <input id="ZIPCode" className="form-control" type="text" maxLength="10"></input>
                            <a tabIndex="0" role="button" data-toggle="popover" data-trigger="focus"
                               data-placement="left"
                               data-content="Enter the ZIP/Postal code for your credit card billing address."><i
                                className="fa fa-question-circle"></i></a>
                        </div>
                    </div>
                    <button id="PayButton" className="btn btn-block btn-success submit-button" type="submit">
                        <span className="submit-button-lock"></span>
                        <span className="align-middle">Pay {price}</span>
                    </button>
                </form>
            </div>

            <div className="stripe-payment-ui">
                <StripeCheckout
                    stripeKey="pk_test_51J8R13E0pZfHtqeOwbTMbjIavkjjILqevpElHxiuWopUuznA7SzlW2kjYV1z5PeFN6X3CZxX1OMrgTmiS4Eu0AgQ00XitZCzFs"
                    token={handleToken}
                    amount={10 * 100}
                    name={"upfront"}
                />
            </div>
        </div>


    );
}
export default PaymentPage;
