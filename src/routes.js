import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/home";
import Form from "./core/form";
import Login from "./core/login";
import Help from "./core/help";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/form" exact component={Form}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/help" exact component={Help}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;