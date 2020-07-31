import React, { Component } from "react";
import Menu from "../components/menu";
import { API } from "../Api";
import GOI from "../assets/logo/GOI.png";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
            find: "",
            check: false
        };
    }
    render() {
        const handleChange = (name) => (event) => {
            this.setState({ error: false, [name]: event.target.value });
        };
        const { find, data, check } = this.state;
        const finder = () => {
            if (find.length <= 5) {
                alert("please enter a valid registration no.")
            }
            fetch(` ${API}/loanForm/info/${find}`)
                .then(res => res.json())
                .then(res => this.setState({ isLoaded: true, data: res, check: true }))
                .then(res => console.log(data))
                .catch(() => this.setState({ error: true }));
        }
        const checker = () => {
            if (check === true && data.message) {
                return (
                    <div className="text-center fill-form">Please enter a valid application no.</div>
                )
            }
            if (data.length === 0) {
                return (
                    <div className="text-center fill-form">Fill the Registration No. to get the application status !</div>
                )
            }
            return (
                <div className="search-data">
                    <div className="row">
                        <div className="search-head text-center col-12">Records</div>
                        <div className="col-md-12 col-lg-6 search-values">
                            Name : {data.CandidateName}
                            <br />
                            Requested Amount : {data.RequestedAmount}
                            <br />
                            Account No : {data.LoanAccount}
                            <br />
                            Bank IFSC code: {data.AccountIFSC}
                            <br />
                            IMO code: {data.LoanMediator}
                            <br />
                            Account Holder Name : {data.AccountName}
                            <br />
                            Transaction Id : {JSON.stringify(data.TransactionId)}
                            <br />
                            Income Level: {data.IncomeLevel}
                            <br />
                            Economic Activity:{data.EconomicActivity}
                            <br />
                            Age:{data.Age}
                            <br />
                            Savings: {data.Saving}
                            <br />
                            Sanctioned Amount : {data.SanctionedAmount}
                            <br />
                            Paid Amoun : {data.PaidAmount}
                            <br />

                        </div>
                        <div className="col-sm-12 col-md-6 search-values">
                            Family Strength : {data.FamilyStrength}
                            <br />
                            Caste : {data.Caste}
                            <br />
                            Religion : {data.Religion}
                            <br />
                            Literacy Level: {data.LiteracyLevel}
                            <br />
                            Date of Return: {data.DateofReturn}
                            <br />
                            Status : {data.Status}
                            <br />
                            Status Info : {data.FormReason}
                            <br />
                            Income Level: {data.IncomeLevel}
                            <br />
                            Repayment:{data.Repayment}
                            <br />
                            Age:{data.Age}
                            <br />
                            Savings: {data.Saving}
                            <br />
                            Installment Details: {JSON.stringify(data.InstallmentDetails)}
                            <br />
                            Loan Intrest: {data.LoanIntrest}
                            <br />
                            Credit Score: {data.CreditScore}
                            <br />
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
                        Application Status
                    </div>
                    <div className="form-background">
                        <div className="text-center">
                            <img src={GOI} alt="logo" className="goi-logo"></img>
                        </div>
                        <div className="serach-head text-center">
                            Search Applications
                        </div>
                        <div className="search-content text-center">
                            <input onChange={handleChange("find")} className="search-bar" placeholder="Enter Application no."></input>
                            <br /><br />
                            <button onClick={finder} className="search-btn">Search!</button>
                        </div>
                        {checker()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;