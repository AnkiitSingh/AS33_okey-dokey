import React, { Component } from "react";
import Menu from "../components/menu";
import { API } from '../Api';
import { ApproveRepayment, RejectRepayment } from "../helper/repayment"
class RepaymentInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
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
                fetch(` ${API}/repayment/${url}`)
                    .then(res => res.json())
                    .then(res => this.setState({ items: res, isLoaded: true }))
                    .catch(() => this.setState({ error: true }));
            }
        }
        this.setState({ isLoaded: true })
    }

    render() {
        const { items } = this.state;
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
                event.preventDefault();
                ApproveRepayment(items.LoanId, items.amount, items.paymentId)
                    .then((data) => {
                        if (data.error) {
                            console.log(data.error);
                        }
                    })
                    .then(() => alert("repayment approved"))
                    .then(() => { window.location.reload(false); })
                    .catch((data) => {
                        console.log(data.error);
                    });
            };
            const onReject = (event) => {
                event.preventDefault();
                RejectRepayment(items.LoanId)
                    .then((data) => {
                        if (data.error) {
                            console.log(data.error);
                        }
                    })
                    .then(() => alert("repayment rejected"))
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
                                Status : {items.status}<br />
                                Id: &nbsp; {items._id}<br />
                                Payment Id :&nbsp; {items.paymentId}
                            </div>
                            <div className="col-sm-12 col-md-6 loan-info-border">
                                Paid Amount : {items.amount}<br />
                                Loan Form Id: &nbsp;{items.LoanId}
                            </div>
                            <div className="col-sm-6 text-center payable-pad">
                                <button className="reject-btn" onClick={onReject}>Reject</button>
                            </div>
                            <div className="col-sm-6  text-center payable-pad">
                                <button className="approve-btn" onClick={onApprove}>Approve</button>
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
                        Repayment Info
                    </div>
                    <div >
                        {logCheck()}
                    </div>
                </div>
            </div>
        )
    }
}

export default RepaymentInfo;