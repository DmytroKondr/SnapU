import React, { useEffect } from "react";
import menuIco from "../images/menu.png"
import arrowIco from "../images/arrow.png"

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
                }} className="menu-item">Adout us</span>
                <span onClick={() => {
                    document.querySelector('body').classList.remove('bg')
                    document.querySelector('#menu').classList.remove('hidden')
                    props.changePage(1)
                }} className="menu-item">Products</span>
                <span onClick={() => {
                    document.querySelector('body').classList.remove('bg')
                    document.querySelector('#menu').classList.remove('hidden')
                    props.changePage(2)
                }} className="menu-item">Leave review</span>
                <span onClick={e => {
                    e.stopPropagation()
                    e.target.parentElement.parentElement.querySelector('.drop-down-menu').classList.toggle('hidden')
                    e.target.parentElement.querySelector('#arrow').classList.toggle('flip')
                }} id="settings" className="menu-item">Settings <img id="arrow" src={arrowIco} /> </span>
                <div className="drop-down-menu hidden">
                    <select onChange={e => {
                        props.chandgeCurrency(e.target.value) 
                        // document.querySelector('.drop-down-menu').classList.toggle('hidden')
                    }}>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="EUR">EUR</option>
                    </select>
                    <div id="close-menu" onClick={e => {
                        e.stopPropagation()
                        e.target.parentElement.classList.toggle('hidden')
                    }}></div>
                </div>
            </div>

            <div id='menu-account'>
                <input type="button" id="login" value='Login' />
                <input type="button" id="register" value='Register' />
            </div>
        </div>

        <img src={menuIco} onClick={() => {
            document.querySelector('body').classList.add('bg')
            document.querySelector('#menu').classList.add('hidden')
        }} alt="menu" id="menuIco" />
    </header>
}

export default Header