import React, { Component } from "react";
import Menu from "../components/menu";
import { API } from '../Api';
import { repayReq, cancelReq } from "../helper/ImoHelper";
import { Form } from "react-bootstrap"
import Repayment from "../helper/repayment"
class ImoLoanInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            paymentId: "",
            amount: ""
        };
    }
    componentDidMount() {
        const local = localStorage.getItem("jwt");
        const user = JSON.parse(local);
        var url = this.props.match.params.id;
        if (localStorage.getItem("jwt") !== null) {
            if (user.user.role === 1) {
                fetch(` ${API}/loanForm/info/${url}`)
                    .then(res => res.json())
                    .then(res => this.setState({ items: res, isLoaded: true }))
                    .catch(() => this.setState({ error: true }));
            }
        }
        this.setState({ isLoaded: true })
    }
    render() {
        const { items, paymentId, amount } = this.state;
        const handleChange = (name) => (event) => {
            this.setState({ error: false, [name]: event.target.value });
        };
        const LoanId = items._id;
        const onSubmit = (event) => {
            event.preventDefault();
            if (items.SanctionedAmount === 0) {
                return alert("Your sanctioned amount is 0")
            }
            else if (!paymentId || !amount) {
                return alert("Please fill the complete information")
            }
            this.setState({ error: false });
            Repayment({ paymentId, amount }, LoanId)
                .then((data) => {
                    if (data.error) {
                        console.log("error")
                        this.setState({ error: data.error });
                    } else {
                        this.setState({
                            success: true,
                            email: "",
                            password: ""
                        });
                        alert("Repayment request sent");
                        window.location.reload(false);
                    }
                })
                .catch(() => { console.log("signin request failed") });
        };
        const logCheck = () => {
            const local = localStorage.getItem("jwt");
            const user = JSON.parse(local);
            if (localStorage.getItem("jwt") === null) {
                return (
                    <div className="core-error text-center">
                        Login to see Loan Info !
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
            const onApprove = (event) => {
                event.preventDefault();
                repayReq(items._id)
                    .then((data) => {
                        if (data.error) {
                            console.log(data.error);
                        }
                    })
                    .then(() => alert("repayment requested"))
                    .then(() => { window.location.reload(false); })
                    .catch((data) => {
                        console.log(data.error);
                    });
            };
            const onReject = (event) => {
                event.preventDefault();
                cancelReq(items._id)
                    .then((data) => {
                        if (data.error) {
                            console.log(data.error);
                        }
                    })
                    .then(() => alert("Loan request cancelled"))
                    .then(() => { window.location.reload(false); })
                    .catch((data) => {
                        console.log(data.error);
                    });
            };
            return (
                <div className="IMO-page">
                    <div className="loan-info-heading text-center">
                        Loan Information
                    </div>
                    <div className="loan-content">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                Candidate Name: <span className="key-value">{items.CandidateName}</span>
                                <br />
                                Account No: <span className="key-value">{items.LoanAccount}</span>
                                <br />
                                Id: <span className="key-value">{items._id}</span><br />
                                Account IFSC: <span className="key-value">{items.AccountIFSC}</span><br />
                                Account Holder Name: <span className="key-value">{items.AccountName}</span><br />
                                Requested Amount: <span className="key-value">{items.RequestedAmount}</span><br />
                                Income Level: <span className="key-value">{items.IncomeLevel}</span><br />
                                Economic Activity: <span className="key-value">{items.EconomicActivity}</span><br />
                                Age: <span className="key-value">{items.Age}</span><br />
                                Paid Amount: <span className="key-value">{items.PaidAmount}</span><br />
                                Credit Score: <span className="key-value">{items.CreditScore}</span><br />
                                Installment Details: <span className="key-value">{items.InstallmentDetails}</span><br />
                            </div>
                            <div className="col-sm-12 col-md-6 loan-info-border">
                                Sanctioned Amount: <span className="key-value">{items.SanctionedAmount}</span><br />
                                Savings: <span className="key-value">{items.Saving}</span><br />
                                FamilyStrength: <span className="key-value">{items.FamilyStrength}</span><br />
                                Caste: <span className="key-value">{items.Caste}</span><br />
                                Religion: <span className="key-value">{items.Religion}</span><br />
                                Literacy Level: <span className="key-value">{items.LiteracyLevel}</span><br />
                                Status: <span className="key-value">{items.Status}</span><br />
                                Form Current Status: <span className="key-value">{items.FormReason}</span><br />
                                Repayment: <span className="key-value">{items.Repayment}</span><br />
                                Repayment Status: <span className="key-value">{items.RepaymentReason}</span><br />
                                TransactionId: <span className="key-value">{JSON.stringify(items.TransactionId)}</span><br />
                            </div>
                            <div className="col-sm-12 col-md-6 decision-padding text-center">
                                <div className="command-text text-center">Cancel Request</div>
                                <div className="text-center">
                                    <button className="reject-btn" onClick={onReject}>Cancel!</button>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 decision-padding1 text-center">
                                <div className="command-text text-center">Request next installment</div>
                                <div className="text-center">
                                    <button onClick={onApprove} className="approve-btn">Request!</button>
                                </div>
                            </div>
                            <div className="col-sm-12 text-center">
                                <div className="Repayment-section">
                                    Enter Repayment Details
                                    <div className="repayment-form">
                                        <Form className="laon-field-padding1">
                                            <Form.Group >
                                                <Form.Label>Paid Amount<span className="text-danger">*</span></Form.Label>
                                                <Form.Control type="Number" placeholder="Enter Paid amount" onChange={handleChange("amount")} />
                                            </Form.Group>
                                            <Form.Group >
                                                <Form.Label>Transaction Id<span className="text-danger">*</span></Form.Label>
                                                <Form.Control type="string" placeholder="Enter transaction Id" onChange={handleChange("paymentId")} />
                                            </Form.Group>
                                        </Form>
                                        <div className="repay-sub">
                                            <button className="repay-sub-btn" onClick={onSubmit}>Submit</button>
                                        </div>
                                    </div>
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
                        Loan Info
                    </div>
                    <div >
                        {logCheck()}
                    </div>
                </div>
            </div>
        )
    }
}

export default ImoLoanInfo;