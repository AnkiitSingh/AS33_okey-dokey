import React, { useState, useEffect } from "react";
import Menu from "../components/menu";
import one from "../assets/logo/one.png";
import two from "../assets/logo/two.png";
import three from "../assets/logo/three.png";
import { Form } from "react-bootstrap"
import aadhar from "../assets/logo/aadhar.jpg";
import statement from "../assets/logo/BankStatement.png";
import { createLoan } from "../helper/createLoan";

const LoanForm = () => {
    const local = localStorage.getItem("jwt");
    const user = JSON.parse(local);
    const [values, setValues] = useState({
        LoanMediator: "",
        CandidateName: "",
        RequestedAmount: "",
        AccountName: "",
        LoanAccount: "",
        AccountIFSC: "",
        TransactionId: "",
        BankPassbook: "",
        AadharPhoto: "",
        IncomeLevel: "",
        EconomicActivity: "",
        Age: "",
        Saving: "",
        FamilyStrength: "",
        Caste: "",
        Religion: "",
        LiteracyLevel: "",
        error: "",
        success: false,
        formData: ""
    });
    const { formData, error, success, LoanMediator } = values;

    const preload = () => {
        setValues({ formData: new FormData() });
    }

    useEffect(() => {
        preload();
    }, []);

    const handleChange = name => event => {
        const value = name === "AadharPhoto" || name === "BankPassbook" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value, error: "" });
        formData.append('LoanMediator', user.user._id);
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
                    <h4>Loan Form successfully submitted!, You can check current status on Dashboard.
                    </h4>
                </div>
            )
    }
    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true });
        createLoan(formData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                alert("Form Successfully Filled")
                setValues({
                    ...values,
                    success: true,
                });
            }
        });
    };
    const logCheck = () => {
        if (localStorage.getItem("jwt") === null) {
            return (
                <div className="core-error text-center">
                    Login to see Form !
                </div>
            )
        }
        if (localStorage.getItem("jwt") !== null) {
            if (user.user.role !== 1) {
                return (
                    <div className="core-error text-center">
                        You are not Authorized
                    </div>
                )
            }
        }
        return (
            <div>
                <div className="form-background">
                    <div className="row loan-content">
                        <div className="col-md-12 col-lg-4">
                            <img src={one} className="loan-form-number" alt="number"></img>
                            <span className="loan-fields">
                                Loan Bearer Aadhar photo
                            </span>
                            <div className="loan-form-file">
                                <input type="file" onChange={handleChange("AadharPhoto")}></input>
                            </div>
                            <div className="loan-example">
                                Example
                                <br />
                                <img src={aadhar} alt="example" className="loan-image"></img>
                            </div>
                            <img src={two} className="loan-form-number" alt="number"></img>
                            <span className="loan-fields">
                                Bank Statement
                            </span>
                            <br />
                            <span className="laon-form-descroption">(Please provide a clear image of last 6 month bank statement)</span>
                            <div className="loan-form-file">
                                <input type="file" onChange={handleChange("BankPassbook")}></input>
                            </div>
                            <div className="loan-example">
                                Example
                                <br />
                                <img src={statement} alt="example" className="loan-image"></img>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <img src={three} className="loan-form-number" alt="number"></img>
                            <span className="loan-fields">
                                Required Fields
                            </span>
                            <Form className="laon-field-padding">
                                <Form.Group >
                                    <Form.Label>Name<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Name of the candidate" onChange={handleChange("CandidateName")} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Bank Account No<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Enter Account No." onChange={handleChange("LoanAccount")} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Bank Account IFSC code<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Enter IFSC code" onChange={handleChange("AccountIFSC")} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Bank Account Name<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Enter Account Name" onChange={handleChange("AccountName")} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Requested Amount<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Requested Amount" onChange={handleChange("RequestedAmount")} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Income Level<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Enter Income level" onChange={handleChange("IncomeLevel")} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Economic Activity<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Enter Economic activity" onChange={handleChange("EconomicActivity")} />
                                </Form.Group>
                            </Form>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <Form className="laon-field-padding1">
                                <Form.Group >
                                    <Form.Label>Age<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Bearer Age." onChange={handleChange("Age")} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Savings<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Bearer Savings" onChange={handleChange("Saving")} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Family Strength<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Totla no of family members" onChange={handleChange("FamilyStrength")} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Caste<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Bearers caste" onChange={handleChange("Caste")} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Religion<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Bearers religion" onChange={handleChange("Religion")} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Literacy Level<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Bearers literacy level" onChange={handleChange("LiteracyLevel")} />
                                </Form.Group>
                            </Form>
                            <div className="text-center">
                                <button className="loan-form-submit" onClick={onSubmit}>Submit</button>
                            </div>
                            <div >
                                {errorMessage()}
                                {successMessage()}
                                {JSON.stringify(LoanMediator)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <Menu />
            <div className="core-page-pad">
                <div className="core-title">
                    Loan Form
                </div>
                {logCheck()}
            </div>
        </div>
    )
}

export default LoanForm;