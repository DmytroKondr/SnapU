import React from "react";
import { useEffect } from "react";
import AboutUs from "./AboutUs";
import Products from "./Products";
import Review from "./Review";




function Content(props) {

    let result
    if (props.page === 0) result = <AboutUs changePage={props.changePage} />
    else if (props.page === 1) result = <Products getCurrency={props.getCurrency} />
    else result = <Review />


    return <main>
        {result}
    </main>
}

export default Content