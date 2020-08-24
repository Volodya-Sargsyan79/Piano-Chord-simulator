import React from "react";
import './Footer.scss'
import {Link} from "react-router-dom";

export default ()=>{
    return(
        <div className={'footer_all'}>
           <div className={'footer_top d-flex flex-wrap'}>
               <div className={'d-flex col-lg-10'}>
                   <div className={'footer_logo col-lg-6 '}>
                       <div>
                           <p>Logo</p>
                       </div>
                       <p>Find your chord progression and inspiration for making music.</p>
                   </div>
                   <div className={'footer_links col-lg-6 '}>
                       <ul>
                           <li>
                               <Link to={'/'}>Generator</Link>
                           </li>
                           <li>
                               <Link to={'/blog'}>Blog</Link>
                           </li>
                           <li>
                               <Link to={'/jobs'}>Jobs</Link>
                           </li>
                           <li>
                               <Link to={'/terms&&_of&&_service&&'}>Terms of service</Link>
                           </li>
                           <li>
                               <Link to={'/privacy_policy'} >Privacy policy</Link>
                           </li>
                           <li>
                               <Link to={'/affiliate'} >Affiliate</Link>
                           </li>
                       </ul>
                   </div>
               </div>

               <div className={'footer_contact col-lg-2 '}>
                   <p>Contact us</p>
                   <a href="#" className={'fca'}>team@chordchord.com</a>
                   <p className={'fp2'}>Follow us</p>
                   <div className={'footer_icons'}>
                       <div>
                           <i className="fa fa-instagram"></i>
                           <i className="fa fa-facebook-square"></i>
                       </div>
                   </div>
               </div>
           </div>
            <div className={'footer_privacy'}>
                <p>©2020 ChordChord LTD. All rights reserved.</p>
            </div>
        </div>
    )
}