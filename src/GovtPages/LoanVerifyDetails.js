import React, { Component } from "react";
import Menu from "../components/menu";
import { API } from '../Api';
import { LoanApprove, LoanReject } from "../helper/loanApprove";

class LoanVerifyInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            SanctionedAmount: "",
            DateofReturn: "",
            CreditScore: "",
            LoanIntrest: "",
            InstallmentDetails: "",
            FormReason: "",
            PayableInstallment: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event, name) {
        this.setState({ [name]: event.target.value });
    }
    componentDidMount() {
        const local = localStorage.getItem("jwt");
        const user = JSON.parse(local);
        var url = this.props.match.params.id;
        if (localStorage.getItem("jwt") !== null) {
            if (user.user.role === 3) {
                fetch(` ${API}/loanForm/info/${url}`)
                    .then(res => res.json())
                    .then(res => this.setState({ items: res, isLoaded: true }))
                    .catch(() => this.setState({ error: true }));
            }
        }
        this.setState({ isLoaded: true })
    }

    render() {
        const { items, SanctionedAmount, DateofReturn, CreditScore, LoanIntrest, InstallmentDetails, FormReason, PayableInstallment } = this.state;
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
                if (user.user.role !== 3) {
                    return (
                        <div className="core-error text-center">
                            You are not Authorized
                        </div>
                    )
                }
            }
            const onApprove = (event) => {
                if (!SanctionedAmount || !DateofReturn || !CreditScore || !LoanIntrest || !InstallmentDetails || !PayableInstallment) {
                    return (
                        alert("Please fill complete information")
                    )
                }
                else {
                    event.preventDefault();
                    LoanApprove({ SanctionedAmount, DateofReturn, CreditScore, LoanIntrest, InstallmentDetails, PayableInstallment }, items._id)
                        .then((data) => {
                            if (data.error) {
                                console.log(data.error);
                            }
                        })
                        .then(() => alert("Loan Approved"))
                        .then(() => { window.location.reload(false); })
                        .catch((data) => {
                            console.log(data.error);
                        });
                }
            };
            const onReject = (event) => {
                if (!FormReason) {
                    return (
                        alert("Please enter reason to reject form")
                    )
                }
                else {
                    event.preventDefault();
                    LoanReject({ FormReason }, items._id)
                        .then((data) => {
                            if (data.error) {
                                console.log(data.error);
                            }
                        })
                        .then(() => alert("Loan Form Rejected"))
                        .then(() => { window.location.reload(false); })
                        .catch((data) => {
                            console.log(data.error);
                        });
                }
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
                                TransactionId: <span className="key-value">{items.TransactionId}</span><br />
                            </div>
                            <div className="col-sm-12 col-md-6 loan-info-seperate text-center">
                                <div className="loan-photo-text">
                                    Aadhar Card
                                </div>
                                <img src={`${API}/loanForm/getAadhar/${items._id}`} alt="aadhar" className="loan-photos" />
                            </div>
                            <div className="col-sm-12 col-md-6 loan-info-seperate text-center">
                                <div className="loan-photo-text">
                                    Bank Statement
                                </div>
                                <img src={`${API}/loanForm/getPassbook/${items._id}`} alt="aadhar" className="loan-photos" />
                            </div>
                            <div className="col-sm-12 col-md-6 decision-padding text-center">
                                <div className="command-text text-center">Loan Rejection</div>
                                Rejection Reason:
                                <br />
                                <textarea className="reason-textarea" placeholder="Enter Rejection Reason" onChange={(e) => this.handleChange(e, 'FormReason')}></textarea>
                                <br /><br />
                                <div className="text-center">
                                    <button className="reject-btn" onClick={onReject}>Reject!</button>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 decision-padding1 text-center">
                                <div className="command-text text-center">Loan Approval</div>
                                Total Sanctioned Amount:
                                <br />
                                <input className="reason-input" placeholder="Enter Total Sanctioned amount" onChange={(e) => this.handleChange(e, 'SanctionedAmount')}></input>
                                <br /><br />
                                Loan Return date: <br />
                                <input className="reason-input" placeholder="Loan Return Date" onChange={(e) => this.handleChange(e, 'DateofReturn')}></input>
                                <br /><br />
                                Enter Credit Sore: <br />
                                <input className="reason-input" placeholder="Credit Score" onChange={(e) => this.handleChange(e, 'CreditScore')}></input>
                                <br /><br />
                                Loan Intrest: <br />
                                <input className="reason-input" placeholder="Loan Intrest" onChange={(e) => this.handleChange(e, 'LoanIntrest')}></input>
                                <br /><br />
                                Installment Details: <br />
                                <input className="reason-input" placeholder="Installment details with comma" onChange={(e) => this.handleChange(e, 'InstallmentDetails')}></input>
                                <br /><br />
                                Installment amount to be paid: <br />
                                <input className="reason-input" placeholder="Payable Installment Amount" onChange={(e) => this.handleChange(e, 'PayableInstallment')}></input>
                                <br /><br />
                                <div className="text-center">
                                    <button onClick={onApprove} className="approve-btn">Approve !</button>
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

export default LoanVerifyInfo;