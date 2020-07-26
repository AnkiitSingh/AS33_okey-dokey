import React from "react";
import "../assets/css/footer.css";
import GOI from "../assets/logo/GOI.png"

const Footer = () => {
    return (
        <div>
            <div className="footer-color text-center">
                <img src={GOI} alt="goi" className="footer-png" />
                TOGETHER, LETS PROMOTE THE WOMENS OF INDIA
                <br />
                <br />
                <div className="row">
                    <div className="col-sm-12 col-md-2">
                    </div>
                    <div className="col-sm-12 col-md-4 footer-address">
                        Address<br /><br />
                        Rashtriya Mahila Kosh,<br />
                        Samaj Kalyan Bhawan, B-12,<br />
                        4th Floor Qutab Institutional Area,<br />
                        New Delhi - 110016
                    </div>
                    <div className="col-sm-12 col-md-4 footer-contact">
                        Contact Details <br /><br />
                        Mob No - +91-11-26567187 / 26567188 <br />
                        Emial - ed_rmk@nic.in
                    </div>
                    <div className="col-sm-12 col-md-2">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;