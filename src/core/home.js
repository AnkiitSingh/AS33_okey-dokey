import React from "react";
import Menu from "../components/menu";
import "../assets/css/home.css";
import Lottie from 'react-lottie'
import women from "../assets/logo/women.json";
import cover from "../assets/logo/cover.png";
import Footer from "../components/footer";

const Home = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: women,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div>
            <Menu />
            <div className="core-page-pad">
                <div className="core-title">
                    Home
                </div>
                <div className="background">
                    <div className="back-color">
                        <div className="home-heading text-center">
                            Investing in girls' and women's potential
                        </div>
                        <div className="text-center">
                            <a href="https://rmk.nic.in/"><button className="home-btn">Get Involved!</button></a>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="home-pad">
                    <div className="row home-back">
                        <div className="col-md-12 col-lg-6 text-center">
                            <Lottie options={defaultOptions}
                                height={400}
                                width={400}
                            />
                        </div>
                        <div className="col-md-12 col-lg-6 text-center home-desc">
                            Our Mission
                        <div className="home-about">
                                To be a single window facilitator for provision of financial services with backward and
                                forward linkages for women in the unorganized sector through Intermediary Micro Finance
                                Organizations (IMOs) and Women Self Help Groups (SHGs) and to augment their capacities
                                through multi-pronged efforts.
                        </div>
                            <a href="/form"><button className="home-btn2">Apply Loan</button></a>
                        </div>
                    </div>
                    <hr />
                    <div className="row home-back2">
                        <div className="col-md-12 col-lg-6 home-desc text-center">
                            About RMK
                        <div className="home-about">
                                Rashtriya Mahila Kosh (RMK), established in 1993 is a  national  level  organization  as an  autonomous
                                body  under the  aegis of  the  Ministry of  Women and Child Development, for socio-economic empowerment
                                of  women.  The  operating  model  currently followed by  RMK is that  of a  facilitating agency  wherein
                                RMK  provides loans to  NGO-MFIs termed as Intermediary Organizations (IMO) which on-lend to Self Help Groups
                                (SHGs)  of women.
                        </div>
                            <a href="https://rmk.nic.in/introduction-0"><button className="home-btn2">More</button></a>
                        </div>
                        <div className="col-md-12 col-lg-6 text-center home-png">
                            <img src={cover} alt="cover" className="home-cover-png" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="home-back3">
                    <div className="back-color2">
                        <div className="row text-center">
                            <div className="col-md-12 col-lg-3 home-desc2">
                            </div>
                            <div className="col-md-12 col-lg-6 home-desc2">
                                Schemes & Other Activities
                            <div className="home-about2">
                                    The operating model currently followed by RMK is a group model with RMK as a facilitating
                                    agency wherein RMK provides loan products to Non – Governmental Organization (NGO)/ Intermediary
                                    Micro-financing Organization (IMO) / Voluntary Organisation (VO) which on-lend to Women Groups
                                    like SHG, JLG etc
                            </div>
                            </div>
                            <div className="col-md-12 col-lg-3 home-desc2">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;