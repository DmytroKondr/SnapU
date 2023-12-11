import React from "react";
import menuIco from "../images/menu.png"
import arrowIco from "../images/arrow.png"

function Header(props) {

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