import React, { Component } from "react";
import Menu from "../components/menu";
import reload from "../assets/logo/reload.png"
import { API } from '../Api';
import document from '../assets/logo/document.png';

class LoanRepayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        const local = localStorage.getItem("jwt");
        const user = JSON.parse(local);
        if (localStorage.getItem("jwt") !== null) {
            if (user.user.role === 3) {
                fetch(` ${API}/loanForm/repayment`)
                    .then(res => res.json())
                    .then(res => this.setState({ items: res, isLoaded: true }))
                    .catch(() => this.setState({ error: true }));
            }
        }
        this.setState({ isLoaded: true })
    }
    render() {
        const { items } = this.state;
        console.log(this.state.items)
        const logCheck = () => {
            const date = new Date();
            const local = localStorage.getItem("jwt");
            const user = JSON.parse(local);
            if (localStorage.getItem("jwt") === null) {
                return (
                    <div className="core-error text-center">
                        Login to see Profile !
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
            return (
                <div>
                    <div className="last-updated">
                        &nbsp; Last updated at: {JSON.stringify(date)}
                        <span className="reload-btn-space">
                            <button className="reload-btn" onClick={() => { window.location.reload(); }}>
                                <img src={reload} alt="reload" className="reload-btn-img" />
                            </button>
                        </span>
                        <div className="dashboard">
                            <div className="row">
                                {items.map((data, index) => {
                                    return (
                                        <div className="col-md-6 col-lg-2" key={index}>
                                            <span key={index} className="dashboard-list">
                                                <a href={`/Imo/loanRepayment/info/${data._id}`}>
                                                    <button className="dashboard-btn">
                                                        <img src={document} alt="document" className="dash-doc-img" />
                                                        {data.Status}
                                                        <br /><br />
                                                        Candidate: {data.CandidateName}
                                                        <br />
                                                    Req. Amount: {data.RequestedAmount}
                                                        <br />
                                                    Income Level: {data.IncomeLevel}
                                                    </button>
                                                </a>
                                            </span>
                                        </div>
                                    )
                                })}
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
                        Pending IMOs
                    </div>
                    <div >
                        {logCheck()}
                    </div>
                </div>
            </div>
        )
    }
}

export default LoanRepayment;