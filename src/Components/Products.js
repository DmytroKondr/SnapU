import React from "react";


function Products() {

    // Creating imaginary products
    const product1 = {
        name: 'Membership access',
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
        name: 'Membership access',
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

                return <li>{adv}</li>
            })

            return <div>
                <h2>{lvl.levelName}</h2>
                <ul>{advantages}</ul>
                <button className="purchase">$<span>{lvl.cost}</span>/per month</button>
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