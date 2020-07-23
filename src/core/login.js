import React, { useState } from "react";
import Menu from "../components/menu"
import user from "../assets/logo/user.png";
import goi from "../assets/logo/GOI.png";
import signin from "../helper/ngoLogin";
import Deptsignin from "../helper/DeptLogin";
import authenticate from "../helper/ngoAuthenticate";
import { Redirect } from 'react-router-dom';
import isAutheticated from "../helper/ngoIsAuthenticated";
const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        deptId: "",
        error: "",
        error2: "",
        success: false
    });
    const { email, password, error, deptId, error2 } = values;
    const handleChange = (name) => (event) => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };
    const onSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signin({ email, password })
            .then((data) => {
                if (data.error) {
                    console.log("error")
                    setValues({ ...values, error: data.error, success: false });
                } else {
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            success: true,
                            email: "",
                            password: ""
                        });
                    })
                }
            })
            .catch(() => { console.log("signin request failed") });
    };
    const DeptSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: false });
        Deptsignin({ deptId, password })
            .then((data) => {
                if (data.error) {
                    console.log("error")
                    setValues({ ...values, error2: data.error, success: false });
                } else {
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            success: true,
                            email: "",
                            password: ""
                        });
                    })
                }
            })
            .catch(() => { console.log("signin request failed") });
    }
    const errorMessage = () => {
        if (error === "" || error === false) {
            return ("")
        }
        return (
            <div className="alert alert-danger">
                {error}
            </div>
        );
    };
    const errorMessage2 = () => {
        if (error2 === "" || error2 === false) {
            return ("")
        }
        return (
            <div className="alert alert-danger">
                {error2}
            </div>
        );
    };
    const performRedirect = () => {
        if (isAutheticated()) {
            return <Redirect to="/" />;
        }
    };
    return (
        <div>
            <Menu />
            {performRedirect()}
            <div className="core-page-pad">
                <div className="core-title">
                    Login
                </div>
                <div className="row form-background">
                    <div className="col-sm-12 col-md-6">
                        <div className=" login-heading text-center">
                            IMO Login
                        </div>
                        <div className="card-padding login-border">
                            <div className="card">
                                <div className="card-logo text-center">
                                    <img src={user} alt="login selector" className="card-image"></img>
                                </div>
                                <div className="login-fields">
                                    <div className="login-field-name">
                                        Email <span className="text-danger">*</span>
                                    </div>
                                    <input type="text" className="card-input" onChange={handleChange("email")}></input>
                                </div>
                                <div className="login-fields">
                                    <div className="login-field-name">
                                        Password <span className="text-danger">*</span>
                                    </div>
                                    <input type="password" className="card-input" onChange={handleChange("password")}></input>
                                </div>
                                <br />
                                <div className=" text-center">
                                    <button className="form-button" onClick={onSubmit}>Submit</button>
                                </div>
                                <br />
                                <div className="text-center">{errorMessage()}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className=" login-heading text-center">
                            Department Login
                        </div>
                        <div className="card-padding">
                            <div className="card">
                                <div className="card-logo text-center">
                                    <img src={goi} alt="login selector" className="card-image"></img>
                                </div>
                                <div className="login-fields">
                                    <div className="login-field-name">
                                        Dept. Id <span className="text-danger">*</span>
                                    </div>
                                    <input type="text" className="card-input" onChange={handleChange("deptId")}></input>
                                </div>
                                <div className="login-fields">
                                    <div className="login-field-name">
                                        Password <span className="text-danger">*</span>
                                    </div>
                                    <input type="password" className="card-input" onChange={handleChange("password")}></input>
                                </div>
                                <br />
                                <div className=" text-center">
                                    <button className="form-button" onClick={DeptSubmit}>Submit</button>
                                </div>
                                <br />
                                <div className="text-center">{errorMessage2()}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;