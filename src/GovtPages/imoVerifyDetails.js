import React, { Component } from "react";
import Menu from "../components/menu";
import { API } from '../Api';

class ImoVerifyInfo extends Component {
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
        const { items } = this.state;
        console.log(items[0])
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
                            return (
                                <div className="row" key={index}>
                                    <div className="col-sm-12 col-md-6">
                                        IMO Id: <span className="key-value">{data.NgoId}</span><br />
                                        Imo Name: <span className="key-value">{data.name}</span><br />
                                        Imo reg. No.: <span className="key-value">{data.NgoRegNo}</span><br />
                                        Status: <span className="key-value">{data.formReason}</span><br />

                                    </div>
                                    <div className="col-sm-12 col-md-6 loan-info-border">
                                        Imo Head: <span className="key-value">{data.NgoHead}</span><br />
                                        Imo Sector: <span className="key-value">{data.NgoSector}</span><br />
                                        Form Status: <span className="key-value">{data.Status}</span><br />
                                        Imo Email: <span className="key-value">{data.email}</span><br />
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