import React from "react";
import starImg from "../images/star.png"

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

function Review(props){
    let rew = {
        userName: '1',
        email: '1',
        stars: 0,
        rewiew: '1'
    }

    const hoverStar = (e) => {
        let stars = e.target.parentElement.querySelectorAll('img')
        let todo = true
        stars.forEach(el => {
            if(todo && !el.classList.contains('notGray')) el.classList.add('halfGray')
            if(el === e.target){
                todo = false
            }
        });
    }
    const leaveStar = (e) => {
        let stars = e.target.parentElement.querySelectorAll('img')
        stars.forEach(el => {
           el.classList.remove('halfGray')
        });
    }
    const clickStar = (e) => {
        let stars = e.target.parentElement.querySelectorAll('img')
        let rate = 0
        
        stars.forEach(el => {
            el.classList.remove('halfGray')
            el.classList.remove('notGray')
         });
        let todo = true
        stars.forEach(el => {
            if(todo) {
                el.classList.add('notGray')
                rate++
            }
            if(el === e.target){
                todo = false
            }
        });
        rew.stars = rate
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

    return <div id="review">
        <form>
        <h1>{ i18next.t("rewiew.intro", {lng: props.lan}) }</h1>
        <div id="ins">
        <label>
            <p>{ i18next.t("rewiew.Name", {lng: props.lan}) } <span></span></p>
            <input type="text" placeholder={ i18next.t("rewiew.Name", {lng: props.lan}) } onBlur={e => {
                e.target.value = e.target.value.trim()
                if(e.target.value === ''){
                    e.target.parentElement.classList.add('error')
                    e.target.parentElement.querySelector('span').textContent = i18next.t("rewiew.errName", {lng: props.lan}) 
                } else if(e.target.parentElement.classList.contains('error')){
                    e.target.parentElement.classList.remove('error')
                    e.target.parentElement.querySelector('span').textContent = ''
                    rew.userName = e.target.value
                }
            }} />
        </label>
        <label>
            <p>E-mail <span></span></p>
            <input type="email" placeholder="e-mail@mail.com" onBlur={e => {
                if(!validateEmail(e.target.value)){
                    e.target.parentElement.classList.add('error')
                    e.target.parentElement.querySelector('span').textContent = i18next.t("rewiew.errMail", {lng: props.lan}) 
                } else if(e.target.parentElement.classList.contains('error')){
                    e.target.parentElement.classList.remove('error')
                    e.target.parentElement.querySelector('span').textContent = ''
                    rew.email = e.target.value
                }
            }} />
        </label>
        </div>
        <div id="stars">
            <img src={starImg} onClick={clickStar} onMouseLeave={leaveStar} onMouseEnter={hoverStar} alt="1 star" />
            <img src={starImg} onClick={clickStar} onMouseLeave={leaveStar} onMouseEnter={hoverStar} alt="2 stars" />
            <img src={starImg} onClick={clickStar} onMouseLeave={leaveStar} onMouseEnter={hoverStar} alt="3 stars" />
            <img src={starImg} onClick={clickStar} onMouseLeave={leaveStar} onMouseEnter={hoverStar} alt="4 stars" />
            <img src={starImg} onClick={clickStar} onMouseLeave={leaveStar} onMouseEnter={hoverStar} alt="5 stars" />
        </div>
        <label>
            <p>{ i18next.t("rewiew.details", {lng: props.lan}) }</p>
            <textarea cols="50" rows="10" onBlur={e => {
                rew.rewiew = e.target.value
            }}></textarea>
        </label>
        <br/>
        <input onClick={e => {
            e.preventDefault()
            if(rew.userName === '1'){
                e.target.parentElement.querySelector('input[type="text"]').parentElement.classList.add('error')
                e.target.parentElement.querySelector('input[type="text"]').parentElement.querySelector('span').textContent = i18next.t("rewiew.errName", {lng: props.lan}) 
                e.target.parentElement.querySelector('input[type="text"]').focus()
            } else if (rew.email === '1'){
                e.target.parentElement.querySelector('input[type="email"]').parentElement.classList.add('error')
                e.target.parentElement.querySelector('input[type="email"]').parentElement.querySelector('span').textContent = i18next.t("rewiew.errMail", {lng: props.lan}) 
                e.target.parentElement.querySelector('input[type="email"]').focus()
            }

        }} type="submit" value={ i18next.t("rewiew.send", {lng: props.lan}) } />
        </form>
    </div>
}

export default Review