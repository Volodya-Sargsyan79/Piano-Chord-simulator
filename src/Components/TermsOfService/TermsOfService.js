import React from "react";
import './TermsOfService.scss';
import {Link} from 'react-router-dom'

export default ()=>{
    return(
        <div className={'terms_all'}>
            <div>
                <h2>Terms Of Service</h2>
                <p>
                    Thanks for using ChordChord.com. Below you may find terms of service applicable to anyone accessing Website
                    (chordchord.com) (hereinafter referred as "ChordChord", "Website" or "Service") These terms of service ("Agreement")
                    cover your use and access to the Service, and mobile apps associated with the Service provided by ChordChord OÜ.
                    Our Privacy Policy explains how we collect and use your information. By using our Service, you're agreeing to be bound
                    by the terms of this Agreement. By using or accessing the Service, you agree to all the terms and conditions stated in this Agreement.
                    If, at any time, you do not or cannot agree to the terms of this Agreement, you must stop accessing or using the Service.
                </p>
            </div>
            <div>
                <h3>Using ChordChord.com and Personal Information</h3>
                <h4>Log in</h4>
                <p>
                    To use the Service, you will be asked to log in with your Facebook account (hereinafter referred to as “Account”).
                    By logging in for ChrodChord, you express your consent to provide us with accurate, complete and updated information
                    for your Account. This information
                    may be used for contacting you and for informing you of the latest updates and news related to ChordChord.
                </p>
            </div>
            <div>
                <h4>
                    Personal Information
                </h4>
                <p>
                    Please make sure that any personal information stored in your Account is safe from unauthorized use.
                    Don’t provide third parties with information related to access to your Account, such as login and password.
                    Should you notice or suspect any loss, theft or unauthorized use of your Account or password, please notify us
                    immediately. You are responsible for any activity on your Account on ChordChord.com.
                    Thus, we are not liable for any acts or omissions by you in relation to your Account.
                </p>
                <p>
                    ChordChord hereby reassures users that any personal information uploaded to the Account
                    shall not be disclosed to third parties
                    unless the disclosure is claimed by legal bodies as a result of law infringement.
                </p>
            </div>
            <div>
                <h4>
                    Minors
                </h4>
                <p>Children under 13 years of age are not permitted to use ChordChord. Children from 13 to 18 years old are
                    not permitted to use the Service unless they have received permission from a parent or legal guardian.</p>
            </div>
            <div>
                <h3>
                    Privacy
                </h3>
                <p>
                    ChordChord may require you to submit certain personal information
                    that will be collected and used exclusively for the purposes of using our Service.
                    By using this Service, you agree to the collection and use of personal information,
                    including processing and storage of such information in other countries and transfer between them by
                    ChordChord. Read <Link to={'/privacy_policy'}>Privacy Policy</Link>Privacy Policy to find out more how we collect,
                    store and use your personal information and what measures we take to protect your privacy.
                </p>
            </div>
            <div>
                <h3>
                    Cancellation Policy
                </h3>
                <p>
                    You may delete your Account or cancel ChordChord Premium Subscription at any time by contacting
                    our setup experts at team@chordchord.com. We will process your cancellation request and will terminate
                    the Account within five (5) working days. To avoid the next auto-renewal payment,
                    we recommend disabling your Account at least 24 hours before the expiry of the current subscription period.
                </p>
            </div>
            <div>
                <h3>
                    Refund Policy
                </h3>
                <p>
                    We offer a 7-day 100% money back guarantee to all new customers who contact us at team@chordchord.com
                    to cancel before the end of the
                    7th day after the initial payment for the ChordChord Premium Subscription no questions asked.
                </p>
            </div>
            <div>
                <h3>
                    Contact
                </h3>
                <p>
                    If you have any Service inquiries, concerns, questions or complaints regarding this Agreement,
                    please contact us at: ChordChord OÜ, Sepapaja 6, Tallinn 15551, Estonia
                </p>
                <p>
                    The current Agreement last update was Dec 14, 2019.
                </p>
            </div>
        </div>
    )
}