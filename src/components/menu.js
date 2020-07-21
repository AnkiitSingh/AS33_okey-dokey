import React from "react";
import NavHead from "./nav";
import "../assets/css/menu.css";
import govt from "../assets/logo/govt.png";
import home from "../assets/logo/home.png";
import form from "../assets/logo/form.png";
import login from "../assets/logo/login.png";


const Menu = () => {
    return (
        <div>
            <NavHead />
            <div className="menu-head-pad">
                <span className="menu-btn-pad">
                    <a href="/">
                        <button className="menu-btn">
                            <div>
                                <img src={home} alt="home" className="menu-btn-logo" />
                            </div>
                            <div className="menu-btn-text">Home</div>
                        </button>
                    </a>
                </span>
                <span className="menu-btn-pad">
                    <a href="/form">
                        <button className="menu-btn">
                            <div>
                                <img src={form} alt="home" className="menu-btn-logo" />
                            </div>
                            <div className="menu-btn-text">Online</div>
                        </button>
                    </a>
                </span>
                <span className="menu-btn-pad">
                    <a href="/login">
                        <button className="menu-btn">
                            <div>
                                <img src={login} alt="home" className="menu-btn-logo" />
                            </div>
                            <div className="menu-btn-text">Login</div>
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

export default Menu;
