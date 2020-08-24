import React from "react";
import './Navbar.scss'
import {Link} from "react-router-dom";
import logo from './logo/cdn_shopify_com-cras-logo_1728x (1).png'

export default ()=>{
    return(
        <div className={'nav_container'}>
            <div className="navh">
                <input type="checkbox" id="nav-check" />
                    <div className="nav-header" >
                        <div className="nav-title" style={{width:'80px'}}>
                            <Link to={'/'}><img src={logo} style={{width:'100%', height:'100%'}} alt=""/></Link>
                        </div>
                    </div>
                    <div className="nav-btn">
                        <label htmlFor="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>

                    <div className="nav-links">
                        <Link to="/" >Generator</Link>
                        <Link to="/pricing" >Pricing</Link>
                        <Link to="/Blog" >Blog</Link>
                        <button className={'sign'}>Sign In</button>
                    </div>
            </div>
        </div>
    )
}