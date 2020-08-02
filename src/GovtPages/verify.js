import React, { Component } from "react";
import Menu from "../components/menu";
import { API } from "../Api";
import GOI from "../assets/logo/GOI.png";
import { ImoBlackList } from "../helper/approveNgo";

class Verify extends Component {
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
            fetch(` ${API}/getNgo/${find}`)
                .then(res => res.json())
                .then(res => this.setState({ isLoaded: true, data: res, check: true }))
                .then(res => console.log(data))
                .catch(() => this.setState({ error: true }));
        }
        const onBlacklist = (event) => {
            event.preventDefault();
            ImoBlackList(data[0]._id)
                .then((data) => {
                    if (data.error) {
                        console.log(data.error);
                    }
                })
                .then(() => alert("IMO Form Blacklisted"))
                .catch((data) => {
                    console.log(data.error);
                });
        };
        const checker = () => {
            if (check === true && data.message) {
                return (
                    <div className="text-center fill-form">Please enter a valid Aadhar no.</div>
                )
            }
            if (data.length === 0) {
                return (
                    <div className="text-center fill-form">Fill the IMO Aadhar no. to get details !</div>
                )
            }
            return (
                <div className="search-data">
                    <div className="row">
                        <div className="search-head text-center col-12">Records</div>
                        <div className="col-md-12 col-lg-6 search-values">
                            Name : {data[0].name}
                            <br />
                            NgoId : {data[0].NgoId}
                            <br />
                            Registration No : {data[0].NgoRegNo}
                            <br />
                            Ngo Head: {data[0].NgoHead}
                            <br />
                            Id: &nbsp; &nbsp;{data[0]._id}
                            <br />
                        </div>
                        <div className="col-sm-12 col-md-6 search-values">
                            Ngo Sector: {data[0].NgoSector}
                            <br />
                            Email : {data[0].email}
                            <br />
                            Status Reason: {data[0].formReason}
                            <br />
                            Status:{data[0].Status}
                            <br />
                        </div>
                        <div className="col-sm-12 text-center">
                            <br />
                            <button onClick={onBlacklist} className="reject-btn">Blacklist</button>
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
                        Verify Documents
                    </div>
                    <div className="form-background">
                        <div className="text-center">
                            <img src={GOI} alt="logo" className="goi-logo"></img>
                        </div>
                        <div className="serach-head text-center">
                            Search Aadhar
                        </div>
                        <div className="search-content text-center">
                            <input onChange={handleChange("find")} className="search-bar" placeholder="Enter Aadhar No."></input>
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

export default Verify;