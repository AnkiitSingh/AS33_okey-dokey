import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/home";
import Form from "./core/form";
import Login from "./core/login";
import Help from "./core/help";
import ImoDashborad from "./ImoPages/dashboard";
import Profile from "./ImoPages/profile";
import LoanForm from "./ImoPages/loanForm"
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
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;