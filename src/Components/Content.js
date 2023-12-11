import React from "react";
import { useEffect } from "react";
import AboutUs from "./AboutUs";
import Products from "./Products";
import Review from "./Review";




function Content(props) {

    let result
    if (props.page === 0) result = <AboutUs />
    else if (props.page === 1) result = <Products />
    else result = <Review />


    return <content>
        {result}
    </content>
}

export default Content