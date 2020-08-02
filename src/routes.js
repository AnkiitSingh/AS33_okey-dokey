import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/home";
import Form from "./core/form";
import Login from "./core/login";
import Help from "./core/help";
import ImoDashborad from "./ImoPages/dashboard";
import Profile from "./ImoPages/profile";
import LoanForm from "./ImoPages/loanForm";
import LoanInfo from "./ImoPages/loanInfo";
import ImoVerify from "./GovtPages/imoVerify";
import LoanVerify from "./GovtPages/laonVerify";
import LoanVerifyInfo from "./GovtPages/LoanVerifyDetails";
import ImoVerifyInfo from "./GovtPages/imoVerifyDetails";
import LoanRepayment from "./GovtPages/loanRepayment";
import LoanRepayInfo from "./GovtPages/loanRepayInfo";
import LoanPayment from "./GovtPages/loanPayment";
import LoanPaymentInfo from "./GovtPages/loanPaymentInfo";
import Search from "./core/search";
import paymentRecords from "./GovtPages/paymentRecord";
import ImoList from "./GovtPages/imoInfo";
import Verify from "./GovtPages/verify"
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/form" exact component={Form}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/search" exact component={Search}></Route>
                <Route path="/help" exact component={Help}></Route>
                <Route path="/ImoDashboard" exact component={ImoDashborad}></Route>
                <Route path="/profile" exact component={Profile}></Route>
                <Route path="/LoanForm" exact component={LoanForm}></Route>
                <Route path="/Imo/loanInfo/:id" exact component={LoanInfo}></Route>
                <Route path="/Imo/imoVerify" exact component={ImoVerify}></Route>
                <Route path="/Imo/LoanVerify" exact component={LoanVerify}></Route>
                <Route path="/Imo/loanPayment" exact component={LoanPayment}></Route>
                <Route path="/Imo/Records" exact component={paymentRecords}></Route>
                <Route path="/Imo/List" exact component={ImoList}></Route>
                <Route path="/Verify/Documents" exact component={Verify}></Route>
                <Route path="/Imo/LoanVerify/info/:id" exact component={LoanVerifyInfo}></Route>
                <Route path="/Imo/LoanPayment/info/:id" exact component={LoanPaymentInfo}></Route>
                <Route path="/Imo/ImoVerify/info/:id" exact component={ImoVerifyInfo}></Route>
                <Route path="/Imo/loanRepayment" exact component={LoanRepayment}></Route>
                <Route path="/Imo/loanRepayment/info/:id" exact component={LoanRepayInfo}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;