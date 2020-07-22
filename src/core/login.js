import React from "react";
import Menu from "../components/menu"
import user from "../assets/logo/user.png";
import goi from "../assets/logo/GOI.png";

const Login = () => {
    return (
        <div>
            <Menu />
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
                                    <input type="text" className="card-input"></input>
                                </div>
                                <div className="login-fields">
                                    <div className="login-field-name">
                                        Password <span className="text-danger">*</span>
                                    </div>
                                    <input type="text" className="card-input"></input>
                                </div>
                                <br />
                                <div className=" text-center">
                                    <button className="form-button">Submit</button>
                                </div>
                                <br />
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
                                    <input type="text" className="card-input"></input>
                                </div>
                                <div className="login-fields">
                                    <div className="login-field-name">
                                        Password <span className="text-danger">*</span>
                                    </div>
                                    <input type="text" className="card-input"></input>
                                </div>
                                <br />
                                <div className=" text-center">
                                    <button className="form-button">Submit</button>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;