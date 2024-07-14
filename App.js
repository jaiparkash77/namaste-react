import React from "react";
import ReactDOM from "react-dom/client";
import {restaurants} from "./data"

/*
* Header
*   - Logo
*   - Nav Items
* Body
*   - Search
*   - RestaurantContainer
*       - RestaurantCard
*           - Img
*           - Name of Resaurant, Star rating, Cuisine, delivery time
* Footer
*   - Copyright
*   - Links
*   - Address
*   - Contact
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt={name} />
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} Stars</h5>
            <h5>{costForTwo}</h5>
        </div>
    )
}

// not using kyes (not acceptable) <<<<< index as key <<<<< unique id (best practice)
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {restaurants.map((data)=>(
                    <RestaurantCard resData={data} key={data?.info?.id} />
                )
                )}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);