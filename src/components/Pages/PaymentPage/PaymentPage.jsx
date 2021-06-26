import React from 'react';
import './payment.css'


const PaymentPage = () => {

        return (
        <div className="container">
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
                        <label htmlFor="ExpiryDate">Expiry date</label>
                        <input id="ExpiryDate" className="form-control" type="text" placeholder="MM / YY"
                               maxLength="7"></input>
                        {/*<select name="months" id="months">*/}
                        {/*    <option value="Jan">Jan</option>*/}
                        {/*    <option value="Feb">Feb</option>*/}
                        {/*    <option value="Mar">Mar</option>*/}
                        {/*    <option value="Apr">Apr</option>*/}
                        {/*    <option value="May">May</option>*/}
                        {/*    <option value="Jun">Jun</option>*/}
                        {/*    <option value="Jul">Jul</option>*/}
                        {/*    <option value="Aug">Aug</option>*/}
                        {/*    <option value="Sep">Sep</option>*/}
                        {/*    <option value="Oct">Oct</option>*/}
                        {/*    <option value="Nov">Nov</option>*/}
                        {/*    <option value="Dec">Dec</option>*/}
                        {/*</select>*/}
                        {/*<select name="years" id="years">*/}
                        {/*    <option value="2020">2020</option>*/}
                        {/*    <option value="2019">2019</option>*/}
                        {/*    <option value="2018">2018</option>*/}
                        {/*    <option value="2017">2017</option>*/}
                        {/*    <option value="2016">2016</option>*/}
                        {/*    <option value="2015">2015</option>*/}
                        {/*</select>*/}
                    </div>
                    <div className="security-code-group form-group">
                        <label htmlFor="SecurityCode">Security code</label>
                        <div className="input-container">
                            <input id="SecurityCode" className="form-control" type="text"></input>
                            <i id="cvc" className="fa fa-question-circle"></i>
                        </div>
                    </div>
                    {/*<div className="zip-code-group form-group">*/}
                    {/*    <label htmlFor="ZIPCode">ZIP/Postal code</label>*/}
                    {/*    <div className="input-container">*/}
                    {/*        <input id="ZIPCode" className="form-control" type="text" maxLength="10"></input>*/}
                    {/*        <a tabIndex="0" role="button" data-toggle="popover" data-trigger="focus"*/}
                    {/*           data-placement="left"*/}
                    {/*           data-content="Enter the ZIP/Postal code for your credit card billing address."><i*/}
                    {/*            className="fa fa-question-circle"></i></a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <button id="PayButton" className="btn btn-block btn-success submit-button" type="submit">
                        <span className="submit-button-lock"></span>
                        <span className="align-middle">Pay $500.00</span>
                    </button>
                </form>
            </div>
      </div>


    );
}
export default PaymentPage;
