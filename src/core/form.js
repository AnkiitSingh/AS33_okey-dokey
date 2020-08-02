import React, { useState, useEffect } from "react";
import Menu from "../components/menu"
import "../assets/css/core.css";
import one from "../assets/logo/one.png";
import two from "../assets/logo/two.png";
import three from "../assets/logo/three.png";
import aadhar from "../assets/logo/aadhar.jpg"
import imoCertificate from "../assets/logo/imoCertificate.jpg";
import { createNgo } from "../helper/createNgo.js";
import Footer from "../components/footer";

const Form = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        NgoId: "",
        NgoRegNo: "",
        NgoRegCertificate: "",
        AadharPhoto: "",
        NgoHead: "",
        NgoSector: "",
        phoneNo: "",
        error: "",
        success: false,
        formData: ""
    });
    const { formData, error, success } = values;

    const preload = () => {
        setValues({ formData: new FormData() });
    }

    useEffect(() => {
        preload();
    }, []);

    const handleChange = name => event => {
        const value = name === "AadharPhoto" || name === "NgoRegCertificate" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value, error: "" });
    };

    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true });
        createNgo(formData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                console.log(formData)
                alert("Form Successfully Filled")
                setValues({
                    ...values,
                    success: true,
                    name: "",
                    email: "",
                    password: "",
                    NgoId: "",
                    NgoRegNo: "",
                    NgoRegCertificate: "",
                    AadharPhoto: "",
                    NgoHead: "",
                    NgoSector: "",
                    error: "",
                    formData: ""
                });
            }
        });
    };
    const errorMessage = () => {
        if (error === "" || error === false) {
            return (null)
        }
        return (
            <div className="alert alert-danger">
                {error}
            </div>
        );
    };
    const successMessage = () => {
        if (success === true)
            return (
                <div className="alert alert-success text-center">
                    <h4>Form Submit Complete, You can now Log in to apply for loans !
                    </h4>
                </div>
            )
    }
    return (
        <div>
            <Menu />
            <div className="core-page-pad">
                <div className="core-title">
                    IMO Online Registration
                </div>
                {successMessage()}
                <div className="row form-background">
                    <div className="col-md-12 col-lg-4">
                        <img src={one} alt="number" className="form-number"></img>&nbsp; Aadhar Upload
                        <div className="form-fields">
                            <input type="file" className="form-document" onChange={handleChange("AadharPhoto")}></input>
                        </div>
                        <div className="form-example">
                            Example<br /><br />
                            <img src={aadhar} alt="dummy" className="form-dummy-image" ></img>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-3">
                        <img src={two} alt="number" className="form-number"></img>&nbsp;IMO Certificate Upload
                        <div className="form-fields">
                            <input type="file" className="form-document" onChange={handleChange("NgoRegCertificate")}></input>
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
                                            IMO Name <span className="text-danger form-danger">*</span>
                                        </div>
                                        <div className="col-9 form-input-seperator">
                                            <input type="text" className="form-input" onChange={handleChange("name")}></input>
                                        </div>
                                        <div className="col-3 form-input-seperator">
                                            IMO Id <span className="text-danger form-danger">*</span>
                                        </div>
                                        <div className="col-9 form-input-seperator">
                                            <input type="text" className="form-input" onChange={handleChange("NgoId")}></input>
                                        </div>
                                        <div className="col-3 form-input-seperator">
                                            IMO RegNo.<span className="text-danger form-danger">*</span>
                                        </div>
                                        <div className="col-9 form-input-seperator">
                                            <input type="text" className="form-input" onChange={handleChange("NgoRegNo")}></input>
                                        </div>
                                        <div className="col-3 form-input-seperator">
                                            IMO Head name<span className="text-danger form-danger">*</span>
                                        </div>
                                        <div className="col-9 form-input-seperator">
                                            <input type="text" className="form-input" onChange={handleChange("NgoHead")}></input>
                                        </div>
                                        <div className="col-3 form-input-seperator">
                                            IMO Sector<span className="text-danger form-danger">*</span>
                                        </div>
                                        <div className="col-9 form-input-seperator">
                                            <input type="text" className="form-input" onChange={handleChange("NgoSector")}></input>
                                        </div>
                                        <div className="col-3 form-input-seperator">
                                            Phone No<span className="text-danger form-danger">*</span>
                                        </div>
                                        <div className="col-9 form-input-seperator">
                                            <input type="text" className="form-input" onChange={handleChange("phoneNo")}></input>
                                        </div>
                                        <div className="col-3 form-input-seperator">
                                            IMO Email<span className="text-danger form-danger">*</span>
                                        </div>
                                        <div className="col-9 form-input-seperator">
                                            <input type="text" className="form-input" onChange={handleChange("email")}></input>
                                        </div>
                                        <div className="col-3 form-input-seperator">
                                            Password<span className="text-danger form-danger">*</span>
                                        </div>
                                        <div className="col-9 form-input-seperator">
                                            <input type="text" className="form-input" onChange={handleChange("password")}></input>
                                        </div>
                                    </div>
                                    <div className="form-submit">
                                        <button className="form-submit-btn" onClick={onSubmit}>Submit</button>
                                    </div>
                                    <br />
                                    <div className="text-center">{errorMessage()}</div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Form;