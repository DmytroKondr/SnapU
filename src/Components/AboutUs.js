import React from "react";
import img1 from '../images/AboutUsImg1.jfif'
import img2 from '../images/AboutUsImg2.jfif'


function AboutUs() {


    return <div id="about-us">

        <h1>We are SnapU</h1>

        <div>
            <div className="about-text">
                <h2>What is SnapU?</h2>
                <p>SnapU is a young company that offers online services dedicated to transforming people's fitness journeys. We provide tailored workout schedules, nutrition plans, insightful advice, and more to help individuals achieve their fitness goals efficiently and effectively</p>
            </div>
            <div className="about-image">
                <img src={img1} alt="" />
            </div>
        </div>
        
        <div>
            <div className="about-text">
                <h2>Transform Your Fitness Journey with SnapU</h2>
                <p>People should choose SnapU for our commitment to personalized fitness solutions. We understand that each individual's fitness journey is unique, and our comprehensive approach combines tailored workout routines, customized meal plans, and expert guidance. Our dedication to delivering results-driven strategies sets us apart, ensuring that our clients receive the support and tools they need to succeed on their path to a healthier lifestyle.</p>
            </div>
            <div className="about-image">
                <img src={img2} alt="" />
            </div>
        </div>

        <div>
            <h2>Join us now by purchasing suitable plan</h2>
            <input type="button" value='Products' />
        </div>

    </div>
}

export default AboutUs