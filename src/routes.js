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

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/form" exact component={Form}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/help" exact component={Help}></Route>
                <Route path="/ImoDashboard" exact component={ImoDashborad}></Route>
                <Route path="/profile" exact component={Profile}></Route>
                <Route path="/LoanForm" exact component={LoanForm}></Route>
                <Route path="/Imo/loanInfo/:id" exact component={LoanInfo}></Route>
                <Route path="/Imo/imoVerify" exact component={ImoVerify}></Route>
                <Route path="/Imo/LoanVerify" exact component={LoanVerify}></Route>
                <Route path="/Imo/LoanVerify/info/:id" exact component={LoanVerifyInfo}></Route>
                <Route path="/Imo/ImoVerify/info/:id" exact component={ImoVerifyInfo}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;