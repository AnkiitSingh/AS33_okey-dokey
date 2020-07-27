import React, { Component } from "react";
import Menu from "../components/menu";
import { API } from '../Api';
import "../assets/css/govt.css";
import { ImoApprove, ImoReject } from "../helper/approveNgo";

class ImoVerifyInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            formReason: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ formReason: event.target.value });
    }
    componentDidMount() {
        const local = localStorage.getItem("jwt");
        const user = JSON.parse(local);
        var url = this.props.match.params.id;
        if (localStorage.getItem("jwt") !== null) {
            if (user.user.role === 3) {
                fetch(` ${API}/getNgo/${url}`)
                    .then(res => res.json())
                    .then(res => this.setState({ items: res, isLoaded: true }))
                    .catch(() => this.setState({ error: true }));
            }
        }
        this.setState({ isLoaded: true })
    }
    render() {
        const { items, formReason } = this.state;
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
            return (
                <div className="IMO-page">
                    <div className="loan-info-heading text-center">
                        IMO Information
                    </div>
                    <div className="loan-content">
                        {items.map((data, index) => {
                            const id = data._id
                            const onApprove = (event) => {
                                event.preventDefault();
                                ImoApprove(data._id)
                                    .then((data) => {
                                        if (data.error) {
                                            console.log(data.error);
                                        }
                                    })
                                    .then(() => alert("IMO Form Approved"))
                                    .then(() => { window.location.reload(false); })
                                    .catch((data) => {
                                        console.log(data.error);
                                    });
                            };
                            const onReject = (event) => {
                                if (formReason <= 10) {
                                    console.log(formReason.length)
                                    return alert("Please enter complete reason")
                                }
                                else {
                                    event.preventDefault();
                                    ImoReject({ formReason }, id)
                                        .then((data) => {
                                            if (data.error) {
                                                console.log(data.error);
                                            }
                                        })
                                        .then(() => alert("IMO Form Rejected"))
                                        .then(() => { window.location.reload(false); })
                                        .catch((data) => {
                                            console.log(data.error);
                                        });
                                }
                            };
                            return (
                                <div className="row" key={index}>
                                    <div className="col-sm-12 col-md-6">
                                        IMO Id: <span className="key-value">{data.NgoId}</span><br />
                                        Imo Name: <span className="key-value">{data.name}</span><br />
                                        Imo reg. No.: <span className="key-value">{data.NgoRegNo}</span><br />
                                        Imo Email: <span className="key-value">{data.email}</span><br />
                                    </div>
                                    <div className="col-sm-12 col-md-6 loan-info-border">
                                        Imo Head: <span className="key-value">{data.NgoHead}</span><br />
                                        Imo Sector: <span className="key-value">{data.NgoSector}</span><br />
                                        Form Status: <span className="key-value">{data.Status}</span><br />
                                        Status reason: <span className="key-value">{data.formReason}</span><br />
                                    </div>
                                    <div className="col-sm-12 col-md-6 loan-info-seperate text-center">
                                        <div className="loan-photo-text">
                                            Aadhar Card
                                        </div>
                                        <img src={`${API}/getNgo/aadhar/${data._id}`} alt="aadhar" className="loan-photos" />
                                    </div>
                                    <div className="col-sm-12 col-md-6 loan-info-seperate text-center">
                                        <div className="loan-photo-text">
                                            IMO Certificate
                                        </div>
                                        <img src={`${API}/getNgo/certificate/${data._id}`} alt="aadhar" className="loan-certificate" />
                                    </div>
                                    <div className="col-sm-12 col-md-6 text-center decision-padding">
                                        <input className="reason-input" placeholder="Rejection Reason" onChange={this.handleChange}></input>
                                        &nbsp; &nbsp;
                                        <button onClick={onReject} className="reject-btn">Reject!</button>
                                    </div>
                                    <div className="col-sm-12 col-md-6 text-center decision-padding1">
                                        <button onClick={onApprove} className="approve-btn">Approve !</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }
        return (
            <div>
                <Menu />
                <div className="core-page-pad">
                    <div className="core-title">
                        IMO Details
                    </div>
                    <div >
                        {logCheck()}
                    </div>
                </div>
            </div>
        )
    }
}

export default ImoVerifyInfo;