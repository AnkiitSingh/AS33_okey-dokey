import React, { Component } from "react";
import Menu from "../components/menu";
import { API } from '../Api';
import "../assets/css/IMO.css";
import { Table } from "react-bootstrap";

class Profile extends Component {
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
            if (user.user.role === 1) {
                fetch(` ${API}/getNgo/${user.user._id}`)
                    .then(res => res.json())
                    .then(res => this.setState({ items: res, isLoaded: true }))
                    .catch(() => this.setState({ error: true }));
            }
        }
        this.setState({ isLoaded: true })
    }
    render() {
        const { items } = this.state;
        const local = localStorage.getItem("jwt");
        const user = JSON.parse(local);
        const logCheck = () => {
            if (localStorage.getItem("jwt") === null) {
                return (
                    <div className="core-error text-center">
                        Login to see Profile !
                    </div>
                )
            }
            if (localStorage.getItem("jwt") !== null) {
                if (user.user.role !== 1) {
                    return (
                        <div className="core-error text-center">
                            You are not Authorized
                        </div>
                    )
                }
            }
            return (
                <div className="IMO-page">
                    {items.map((user, index) => {
                        return (
                            <div key={index}>
                                <div className="container profile-top">
                                    <Table striped bordered hover size="sm" className=" profile-table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Key</th>
                                                <th>Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Working Sector</td>
                                                <td>{user.NgoSector}</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Status</td>
                                                <td>{user.Status}</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>IMO Registration No</td>
                                                <td>{user.NgoRegNo}</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>IMO Id</td>
                                                <td>{user.NgoId}</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>IMO Head</td>
                                                <td>{user.NgoHead}</td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>IMO email</td>
                                                <td>{user.email}</td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>Aadhar</td>
                                                <td>
                                                    <img src={`${API}/getNgo/aadhar/${user._id}`} alt="aadhar" className="profile-aadhar" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>8</td>
                                                <td>Registration Certificate</td>
                                                <td>
                                                    <img src={`${API}/getNgo/certificate/${user._id}`} alt="aadhar" className="profile-certificate" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        }
        console.log(items);
        return (
            <div>
                <Menu />
                <div className="core-page-pad">
                    <div className="core-title">
                        Profile
                    </div>
                    {logCheck()}
                </div>
            </div>
        )
    }
}

export default Profile;