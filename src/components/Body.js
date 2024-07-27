import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"
import { useState } from "react";

const Body = () => {
    // Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    // const arr = useState(resList);
    // const [listOfRestaurants, setListOfRestaurants] = arr;
    // const listOfRestaurants = arr[0];
    // const setListOfRestaurants = arr[1];

    // Norma Js Variable
    // let listOfRestaurants = [];

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=> {
                    const filteredList = listOfRestaurants.filter((res)=> res.info.avgRating > 4.3);
                    setListOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((data)=>(
                    <RestaurantCard resData={data} key={data?.info?.id} />
                )
                )}
            </div>
        </div>
    )
}

export default Body;