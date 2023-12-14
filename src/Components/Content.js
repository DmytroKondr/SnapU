import React from "react";
import AboutUs from "./AboutUs";
import Products from "./Products";
import Review from "./Review";




function Content(props) {

    let result
    if (props.page === 0) result = <AboutUs lan={props.lan} changePage={props.changePage} />
    else if (props.page === 1) result = <Products lan={props.lan} getCurrency={props.getCurrency} />
    else result = <Review lan={props.lan} />


    return <main>
        {result}
    </main>
}

export default Content