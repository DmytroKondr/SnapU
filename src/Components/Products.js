import React from "react";
import { nanoid } from "nanoid"

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



function Products(props) {
    console.log(props.getCurrency().usdTo.EUR);

    let curMark = ''
    let scale = 0
    if(props.getCurrency().curentCurrency === 'UAH') {
        curMark = 'грн'
        scale = props.getCurrency().usdTo.UAH
    }
    else if(props.getCurrency().curentCurrency === 'EUR') {
        curMark = 'Є'
        scale = props.getCurrency().usdTo.EUR
    }
    else if(props.getCurrency().curentCurrency === 'USD') {
        curMark = '$'
        scale = 1
    }

    // Creating imaginary products
    const product1 = {
        name: i18next.t('products.1stName', {lng: props.lan}),
        levels: [
            {
                levelName: 'Standart',
                advantages: ['Tutorials access', 'Diet planning', 'Training sceduling'],
                cost: 0.99
            },
            {
                levelName: 'Premium',
                advantages: ['Tutorials access', 'Diet planning', 'Training sceduling', '2h consulting 2 times a month'],
                cost: 4.99
            },
            {
                levelName: 'Premium +',
                advantages: ['Tutorials access', 'Diet planning', 'Training sceduling', 'Personal coach', 'Live lectures access'],
                cost: 9.99
            },
        ]
    }
    const product2 = {
        name: i18next.t('products.2ndName', {lng: props.lan}),
        levels: [
            {
                levelName: 'Standart',
                advantages: ['Tutorials access', 'Diet planning', 'Training sceduling'],
                cost: 0.99
            },
            {
                levelName: 'Premium',
                advantages: ['Tutorials access', 'Diet planning', 'Training sceduling', '2h consulting 2 times a month'],
                cost: 4.99
            }
        ]
    }
    let products = [product1, product2]

    // Creating DOM based on our products
    let result = products.map(product => {

        let prodBody = product.levels.map(lvl => {
            let advantages = lvl.advantages.map(adv => {
                let key = nanoid()
                return <li key={key}>{adv}</li>
            })
            let cost = (Number(lvl.cost) * Number(scale)).toFixed(2)

            return <div>
                <h2>{lvl.levelName}</h2>
                <ul>{advantages}</ul>
                <button className="purchase">{curMark}<span>{cost}</span>{i18next.t('products.perMonth', {lng: props.lan})}</button>
            </div>
        })

        return <div className="product">
            <h2>{product.name}</h2>
            <div>{prodBody}</div>
        </div>
    })

    // Return
    return <div id="products">
        {result}
    </div>
}


export default Products