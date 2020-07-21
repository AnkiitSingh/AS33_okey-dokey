import React from "react";
import Menu from "../components/menu"
import "../assets/css/core.css";
import one from "../assets/logo/one.png";
import two from "../assets/logo/two.png";
import three from "../assets/logo/three.png";
import aadhar from "../assets/logo/aadhar.jpg"
import imoCertificate from "../assets/logo/imoCertificate.jpg";
const Form = () => {
    return (
        <div>
            <Menu />
            <div className="core-page-pad">
                <div className="core-title">
                    IMO Online Registration
                </div>
                <div className="row form-background">
                    <div className="col-md-12 col-lg-4">
                        <img src={one} alt="number" className="form-number"></img>&nbsp; Aadhar Upload
                        <div className="form-fields">
                            <input type="file" className="form-document"></input>
                        </div>
                        <div className="form-example">
                            Example<br /><br />
                            <img src={aadhar} alt="dummy" className="form-dummy-image"></img>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-3">
                        <img src={two} alt="number" className="form-number"></img>&nbsp;IMO Certificate Upload
                        <div className="form-fields">
                            <input type="file" className="form-document"></input>
                        </div>
                        <div className="form-example">
                            Example<br /><br />
                            <img src={imoCertificate} alt="dummy" className="form-dummy-image1"></img>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <img src={three} alt="number" className="form-number"></img>&nbsp;IMO Details
                        <div className="form-fields form-document">
                            Fill the given Attributes
                            <form>
                                <div className="form-attributs">
                                    <div className="row">
                                        <div className="col-3 form-input-seperator">
                                            IMO Id <span className="text-danger form-danger">*</span>
                                        </div>
                                        <div className="col-9 form-input-seperator">
                                            <input type="text" className="form-input"></input>
                                        </div>
                                        <div className="col-3 form-input-seperator">
                                            IMO RegNo.<span className="text-danger form-danger">*</span>
                                        </div>
                                        <div className="col-9 form-input-seperator">
                                            <input type="text" className="form-input"></input>
                                        </div>
                                        <div className="col-3 form-input-seperator">
                                            IMO Head name<span className="text-danger form-danger">*</span>
                                        </div>
                                        <div className="col-9 form-input-seperator">
                                            <input type="text" className="form-input"></input>
                                        </div>
                                        <div className="col-3 form-input-seperator">
                                            IMO Sector<span className="text-danger form-danger">*</span>
                                        </div>
                                        <div className="col-9 form-input-seperator">
                                            <input type="text" className="form-input"></input>
                                        </div>
                                        <div className="col-3 form-input-seperator">
                                            IMO Email<span className="text-danger form-danger">*</span>
                                        </div>
                                        <div className="col-9 form-input-seperator">
                                            <input type="text" className="form-input"></input>
                                        </div><div className="col-3 form-input-seperator">
                                            Password<span className="text-danger form-danger">*</span>
                                        </div>
                                        <div className="col-9 form-input-seperator">
                                            <input type="text" className="form-input"></input>
                                        </div>
                                    </div>
                                    <div className="form-submit">
                                        <button className="form-submit-btn">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;