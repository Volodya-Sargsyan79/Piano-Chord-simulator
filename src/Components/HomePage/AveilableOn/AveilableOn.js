import React from "react";
import google from './Img/google_play.png'
import appstore from './Img/app_store.png'
import './AveilableOn.scss'

export default ()=>{
    return(
        <div className={'aveilable_on_all'}>
            <div className={'aveilable_text'}>
                <h3>ChrasBangers Mobile App Is Finally Aveilable For Android & IOS</h3>
            </div>
            <div className={'aveilable_tags'}>
                <a href="#">
                    <img src={google} alt=""/>
                </a><a href="#">
                    <img src={appstore} alt=""/>
                </a>
            </div>
        </div>
    )
}