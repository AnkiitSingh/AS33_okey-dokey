import React from "react";
import Menu from "../components/menu";
import one from "../assets/logo/one.png";
import two from "../assets/logo/two.png";
import three from "../assets/logo/three.png";
import { Form } from "react-bootstrap"
import aadhar from "../assets/logo/aadhar.jpg";
import statement from "../assets/logo/BankStatement.png";
const LoanForm = () => {
    const local = localStorage.getItem("jwt");
    const user = JSON.parse(local);
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
                                <input type="file"></input>
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
                                <input type="file"></input>
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
                                    <Form.Control type="text" placeholder="Name of the candidate" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Bank Account No<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Enter Account No." />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Bank Account IFSC code<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Enter IFSC code" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Bank Account Name<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Enter Account Name" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Requested Amount<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Requested Amount" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Income Level<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Enter Income level" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Economic Activity<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Enter Economic activity" />
                                </Form.Group>
                            </Form>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <Form className="laon-field-padding1">
                                <Form.Group >
                                    <Form.Label>Age<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Bearer Age." />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Savings<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Bearer Savings" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Family Strength<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Totla no of family members" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Caste<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Bearers caste" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Religion<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Bearers religion" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Literacy Level<span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Bearers literacy level" />
                                </Form.Group>
                            </Form>
                            <div className="text-center">
                                <button className="loan-form-submit">Submit</button>
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