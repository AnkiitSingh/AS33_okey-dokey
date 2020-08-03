import React from "react";
import Menu from "../components/menu"
import "../assets/css/help.css";
import GOI from "../assets/logo/Search1.png"
import GOD from "../assets/logo/Register1.png"
import GOC from "../assets/logo/Login1.png"
import GOP from "../assets/logo/Profile1.png"
import GOL from "../assets/logo/Loan1.png"
import GOX from "../assets/logo/Dashboard3.png"
import GODD from "../assets/logo/Loan2.png"
import GODA from "../assets/logo/RMKlogin.png"
import GODB from "../assets/logo/Imoapplication2.png"
import GODC from "../assets/logo/LoanApplication2.png"
import GODE from "../assets/logo/Payment1 (2).png"
import GODF from "../assets/logo/Record2.png"
import GODG from "../assets/logo/ImoInfo1.png"
import GODH from "../assets/logo/VerifyDoc.png"

const Help = () => {
    return (
        <div id="Fields">
            <Menu />
            <br />
            <h1>Documentation:</h1>
            <div class="Documentation">
                <h2>*Self Help Groups</h2>
                <div class="Self-Help">
                    <div id="Selfs">
                        <ol>
                            <li> Self help groups and micro entrepreneurs can check loan application status from search icon.</li><img src={GOI} alt="goi" className="search" />
                            <li>Self help groups and Micro entrepreneurs can't directly apply for loans, they can apply via some registered IMO's or NGO's</li>
                            <li>Self help groups/  Micro entrepreneurs need to provide us Aadhar card,Bank Account No,Loan Bearer Aadhar photo,Requested Amount* </li><img src={GODD} height="300px" alt="goi" className="search" />
                            <li>The self help groups will receive notification via SMS which is filled in loan form.
                            -  when they apply for loans.
                            -  when the loan request is approved or rejected.
        -  when the loan amount is paid in their account.</li>
                        </ol>
                    </div>
                </div>
                <div class="Ngos">
                    <h2>*NGO's & IMO's</h2>
                    <div id="Selfs">
                        <ol>
                            <li>IMO need to register themselves first through register section for verification purpose. While registration they are used to provide with the the IMO heads Aadhar card and the official registration certificate which is provided by government.</li><img src={GOD} height="300px" alt="goi" className="search" />
                            <li> They can login why are the credentials that they have used while by registering them self on this platform.</li><img src={GOC} height="300px" alt="goi" className="search" />
                            <li>They can check their profile but still can't fill the the long form, until they are approved via the RMK officials.</li><img src={GOP} height="300px" alt="goi" className="search" />
                            <li> IMO will receive notification on the number which was given while filling the form regarding there verification status.</li>
                            <li>When IMO gets approved, then they are eligible for filling the loan form for the self help groups and micro-entrepreneurs.</li><img src={GOL} height="300px" alt="goi" className="search" />
                            <li>After filling the loan form, they can check the status of the loan application from their dashboard section.</li><img src={GOX} height="300px" alt="goi" className="search" />
                        </ol>
                    </div>
                </div>
                <div class="RMK">
                    <h2>*RMK/Department Section</h2>
                    <div id="Selfs">
                        <h5>*We have considered that the RMK will have different Departments for each of these functions.*</h5>
                        <ol>

                            <li>RMK/Department officials can login from here.</li><img src={GODA} height="300px" alt="goi" className="search" />
                            <li>All the Requested IMO's Application's can we approved or rejected.If application is to be rejected then officials need to give a valid reason for rejection.</li><img src={GODB} height="300px" alt="goi" className="search" />
                            <li>If an IMO's applies for loan's then those loan request will be shown in Loan-Request section.From here rmk officials can approve and disapproved the loan application.If application is to be rejected then officials need to give a valid reason for rejection.</li><img src={GODC} height="300px" alt="goi" className="search" />
                            <li> After loan approves it shows in payment section.The payment is in installments and this will be the first intallment.They need to approve the payment by adding the payble amount and the transaction Id.</li><img src={GODE} height="300px" alt="goi" className="search" />
                            <li>If IMO's request for re-intallments,these requests will be shown under re-payment section.They need to approve the re-payment by adding the payble amount and the transaction Id.</li>
                            <li>All the payment done by the RMK Department are shown here.They can check all the transaction from here.</li><img src={GODF} height="300px" alt="goi" className="search" />
                            <li>In IMO info. section they can search about the particular IMO through IMO id and if the IMO is not trusted , then the RMk officials can Blacklist that particular IMO.</li><img src={GODG} height="300px" alt="goi" className="search" />
                            <li>In Verify Doc section,the RMk officials can vallidate the Aadhar info. for approval of the loan application or the IMO application.From here they can also check about any particular IMO's.</li><img src={GODH} height="300px" alt="goi" className="search" />
                        </ol>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Help;


