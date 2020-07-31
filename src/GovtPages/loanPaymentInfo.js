import React, { Component } from "react";
import Menu from "../components/menu";
import { API } from '../Api';
import PaymentApprove from "../helper/approvePayment";

class LoanPaymentInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            PaidAmount: Number,
            TranId: ""
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
        const { items, PaidAmount, TranId } = this.state;
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
                if (!PaidAmount || !TranId) {
                    return (
                        alert("Please fill complete information")
                    )
                }
                else {
                    event.preventDefault();
                    PaymentApprove({ PaidAmount, TranId }, items._id)
                        .then((data) => {
                            if (data.error) {
                                console.log(data.error);
                            }
                        })
                        .then(() => alert("Payment Complete"))
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
                                TransactionId: <span className="key-value">{JSON.stringify(items.TransactionId)}</span><br />
                            </div>
                            <div className="col-sm-12 text-center payable-pad">
                                <h4>Payable Amount - {items.PayableInstallment}</h4>
                            </div>

                            <div className="col-sm-12 col-md-12 decision-padding2 text-center">
                                <div className="command-text text-center">Loan Payment Details</div>
                                Paid Amount:
                                <br />
                                <input type="number" className="reason-input1" placeholder="Enter Paid Amount" onChange={(e) => this.handleChange(e, 'PaidAmount')}></input>
                                <br /><br />
                                Transaction Id: <br />
                                <input className="reason-input1" placeholder="Enter Transaction Id" onChange={(e) => this.handleChange(e, 'TranId')}></input>
                                <br /><br />
                                <div className="text-center">
                                    <button onClick={onApprove} className="approve-btn">Done !</button>
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
                        Payment Req.
                    </div>
                    <div >
                        {logCheck()}
                    </div>
                </div>
            </div>
        )
    }
}

export default LoanPaymentInfo;