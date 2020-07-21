import React from "react";
import { Navbar, NavDropdown, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/nav.css";
import mwcd from "../assets/logo/mwcd.png";
import help from "../assets/logo/help.png";
import official from "../assets/logo/official.png";
import GOI from "../assets/logo/GOI.png";


const NavHead = ({ history }) => {
    const logCheck = () => {
        let local = 5;
        if (local === 5) {
            return (
                <NavDropdown title="Welcome, Ankit" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Update Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item><Button>LogOut</Button></NavDropdown.Item>
                </NavDropdown>
            )
        }
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light">
                <Navbar.Brand className="nav-pad-left">
                    <img className="nav-logo" src={mwcd} alt="ministry" />
                    <span className="nav-brand">MWCD</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav className="nav-pad-right">
                        <div className="nav-pad log-check">
                            {logCheck()}
                        </div>
                        <div className="nav-pad">
                            <a href="https://www.india.gov.in/">
                                <button className="text-center button-back">
                                    <img src={GOI} alt="official" className="nav-button-logo" />
                                    <div className="button-text-pad">GOI</div>
                                </button>
                            </a>
                        </div>
                        <div className="nav-pad">
                            <a href="https://wcd.nic.in/">
                                <button className="text-center button-back">
                                    <img src={official} alt="official" className="nav-button-logo" />
                                    <div className="button-text-pad">MWCD</div>
                                </button>
                            </a>
                        </div>
                        <Link to="/">
                            <button className="text-center button-back">
                                <img src={help} alt="official" className="nav-button-logo" />
                                <div className="button-text-pad">Help</div>
                            </button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default (NavHead);