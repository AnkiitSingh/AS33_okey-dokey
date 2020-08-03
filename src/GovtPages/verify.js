import React, { Component } from "react";
import Menu from "../components/menu";
import { API } from "../Api";
import GOI from "../assets/logo/GOI.png";

class Verify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
            data1: [],
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
            if (find.length <= 3) {
                alert("please enter a valid Aadhar No.")
            }
            fetch(` ${API}/getDumAadhar/${find}`)
                .then(res => res.json())
                .then(res => this.setState({ isLoaded: true, data: res, check: true }))
                .then(res => console.log(data))
                .catch(() => this.setState({ error: true }));
        }

        const checker = () => {
            if (check === true && data.message) {
                return (
                    <div className="text-center fill-form">Please enter a valid Aadhar no.</div>
                )
            }
            if (data.length === 0) {
                return (
                    <div className="text-center fill-form">Fill the Aadhar no. to get details !</div>
                )
            }
            return (
                <div className="search-data text-center">

                    <div className="search-head text-center ">Records</div>
                    <div className="col-md-12search-values">
                        Name : {data[0].Name}
                        <br />
                            Age : {data[0].Age}
                        <br />
                            Address : {data[0].Address}
                        <br />
                            Date of birth: {data[0].Dob}
                        <br />
                            Sex: {data[0].Sex}
                        <br />
                            Id: &nbsp; &nbsp;{data[0]._id}
                        <br />
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
                        <div className="row">
                            <div className="col-md-12 col-lg-12">
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
                </div>
            </div>
        )
    }
}

export default Verify;