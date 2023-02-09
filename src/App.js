import React from "react";
import ReactDOM from "react-dom/client";

import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

/**
 Header
    Logo
    Nav Items(Right side)
    Cart
 Body
    Search bar
    RestrauntList
        RestrsuntCard
        Image
        Name
        Rating
        Cusine
 Footer
    Links
    Copyright
*/

// Dummy data
const burgerKing = {
    name : "Burger King",
    image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kmjxpwf1obnibka2euhj",
    cusines : ["Burgers", "American"],
    rating : "4.2"
};

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);