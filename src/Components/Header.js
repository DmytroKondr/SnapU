import React, { useEffect } from "react";
import menuIco from "../images/menu.png"
import arrowIco from "../images/arrow.png"

import i18next from 'i18next';
import en from "../languages/en.json"
import ukr from "../languages/ukr.json"

i18next.init({
  resources: {
    en: {
      translation: en
    },
    ukr: {
      translation: ukr
    }
  }
});


function Header(props) {

    useEffect(() => {
        let menu = document.querySelector('.drop-down-menu')

        document.addEventListener('click', e =>{
            if(!menu.classList.contains('hidden') && !menu.contains(e.target)){
                menu.classList.add('hidden')
                document.querySelector('#arrow').classList.toggle('flip')
            }
        })
    }, [])

    return <header>
        <span id="logo">SnapU</span>

        <div id="menu">
            <img src={arrowIco} onClick={() => {
                document.querySelector('body').classList.remove('bg')
                document.querySelector('#menu').classList.remove('hidden')
            }} alt="goBack" id="go-back" />
            
            <div id="pages">
                <span onClick={() => {
                    document.querySelector('body').classList.remove('bg')
                    document.querySelector('#menu').classList.remove('hidden')
                    props.changePage(0)
                }} className="menu-item">{i18next.t('header.about', {lng: props.lan})}</span>
                <span onClick={() => {
                    document.querySelector('body').classList.remove('bg')
                    document.querySelector('#menu').classList.remove('hidden')
                    props.changePage(1)
                }} className="menu-item">{i18next.t('header.products', {lng: props.lan})}</span>
                <span onClick={() => {
                    document.querySelector('body').classList.remove('bg')
                    document.querySelector('#menu').classList.remove('hidden')
                    props.changePage(2)
                }} className="menu-item">{i18next.t('header.review', {lng: props.lan})}</span>
                <span onClick={e => {
                    e.stopPropagation()
                    e.target.parentElement.parentElement.querySelector('.drop-down-menu').classList.toggle('hidden')
                    e.target.parentElement.querySelector('#arrow').classList.toggle('flip')
                }} id="settings" className="menu-item">{i18next.t('header.settings', {lng: props.lan})}<img id="arrow" src={arrowIco} /> </span>
                
                <div className="drop-down-menu hidden">
                    <select onChange={e => {
                        props.chandgeCurrency(e.target.value) 
                        // document.querySelector('.drop-down-menu').classList.toggle('hidden')
                    }}>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="EUR">EUR</option>
                    </select>

                    <div id="change-theme" onClick={e => {
                        document.querySelector('#root').classList.toggle('dark-theme')
                    }}>
                        <div className="circle"></div>
                    </div>

                    <div id="change-lang">
                        <button onClick={() => props.setLang('ukr')}>ukr</button>
                        <button onClick={() => props.setLang('en')}>en</button>
                    </div>

                    <div id="close-menu" onClick={e => {
                        e.stopPropagation()
                        e.target.parentElement.classList.toggle('hidden')
                    }}></div>
                </div>
            </div>

            <div id='menu-account'>
                <input type="button" id="login" value={i18next.t('header.login', {lng: props.lan})} />
                <input type="button" id="register" value={i18next.t('header.register', {lng: props.lan})} />
            </div>
        </div>

        <img src={menuIco} onClick={() => {
            document.querySelector('body').classList.add('bg')
            document.querySelector('#menu').classList.add('hidden')
        }} alt="menu" id="menuIco" />
    </header>
}

export default Header