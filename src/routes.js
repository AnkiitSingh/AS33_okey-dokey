import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/home";
import Form from "./core/form"

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/form" exact component={Form}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;