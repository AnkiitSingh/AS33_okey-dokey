import React from "react";
import NavHead from "./nav";
import "../assets/css/menu.css";
import { withRouter } from "react-router-dom";

import govt from "../assets/logo/govt.png";
import home from "../assets/logo/home.png";
import form from "../assets/logo/form.png";
import login from "../assets/logo/login.png";
import help from "../assets/logo/help.png";

const currentTab = (history, path) => {
    if (history.location.pathname === path) {
        return { "backgroundColor": "#022e54" };
    } else {
        return { "backgroundColor": "#0055a9" };
    }
};

const Menu = ({ history }) => {
    return (
        <div>
            <NavHead />
            <div className="menu-head-pad">
                <span className="menu-btn-pad">
                    <a href="/">
                        <button style={currentTab(history, "/")} className="menu-btn">
                            <div>
                                <img src={home} alt="home" className="menu-btn-logo" />
                            </div>
                            <div className="menu-btn-text">Home</div>
                        </button>
                    </a>
                </span>
                <span className="menu-btn-pad" >
                    <a href="/form">
                        <button className="menu-btn" style={currentTab(history, "/form")}>
                            <div>
                                <img src={form} alt="home" className="menu-btn-logo" />
                            </div>
                            <div className="menu-btn-text">Online</div>
                        </button>
                    </a>
                </span>
                <span className="menu-btn-pad" >
                    <a href="/login">
                        <button className="menu-btn" style={currentTab(history, "/login")}>
                            <div>
                                <img src={login} alt="home" className="menu-btn-logo" />
                            </div>
                            <div className="menu-btn-text">Login</div>
                        </button>
                    </a>
                </span>
                <span className="menu-btn-pad" >
                    <a href="/help">
                        <button className="menu-btn" style={currentTab(history, "/help")}>
                            <div>
                                <img src={help} alt="home" className="menu-btn-logo" />
                            </div>
                            <div className="menu-btn-text">Help</div>
                        </button>
                    </a>
                </span>

                {/* Footer Section Starts From here*/}


                <div className="footer">
                    <div className="row">
                        <div className="col footer-text">
                            &copy; Ministry of Women and Child development
                    </div>
                        <div className="col text-right margin-logo">
                            <img src={govt} alt="govt-logo" className="govt-logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Menu);
