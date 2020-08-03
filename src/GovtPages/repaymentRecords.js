import React, { Component } from "react";
import Menu from "../components/menu";
import reload from "../assets/logo/reload.png"
import { API } from '../Api';

class RepaymentRecord extends Component {
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
                fetch(` ${API}/getAll/Repayment`)
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

                        <div className="dashboard1">
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Paymet Id</th>
                                        <th scope="col">Loan Bearer Id</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((data, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{index}</th>
                                                <td>{data.amount}</td>
                                                <td>{data.paymentId}</td>
                                                <td>{data.LoanId}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
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
                        Repayment Records
                    </div>
                    <div >
                        {logCheck()}
                    </div>
                </div>
            </div>
        )
    }
}

export default RepaymentRecord;