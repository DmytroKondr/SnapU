import React from "react";
import img1 from '../images/AboutUsImg1.jfif'
import img2 from '../images/AboutUsImg2.jfif'

import i18next from "i18next";
import en from "../languages/en.json"
import ukr from "../languages/ukr.json"

i18next.init({
    resources:{
        en: {
            translation: en
        },
        ukr: {
            translation: ukr
        }
    }
})


function AboutUs(props) {

    return <div id="about-us">

        <h1>{ i18next.t("main.intro", {lng: props.lan}) }</h1>

        <div>
            <div className="about-text">
                <h2>{ i18next.t("main.1stintro", {lng: props.lan}) }</h2>
                <p>{ i18next.t("main.1st", {lng: props.lan}) }</p>
            </div>
            <div className="about-image">
                <img src={img1} alt="" />
            </div>
        </div>
        
        <div>
            <div className="about-text">
                <h2>{ i18next.t("main.2ndintro", {lng: props.lan}) }</h2>
                <p>{ i18next.t("main.2nd", {lng: props.lan}) }</p>
            </div>
            <div className="about-image">
                <img src={img2} alt="" />
            </div>
        </div>

        <div>
            <h2>{ i18next.t("main.3dintro", {lng: props.lan}) }</h2>
            <input type="button" value={ i18next.t("main.buttonText", {lng: props.lan}) } onClick={() => props.changePage(1)} />
        </div>

    </div>
}

export default AboutUs