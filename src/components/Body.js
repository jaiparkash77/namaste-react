import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    // Local State Variable - Super powerful variable
    // Whenever state variable update, react triggers a reconciliation cycle(re-render the component);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    
    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async () => {
       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // Optional Chaining
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(!onlineStatus) return <h1>Looks like you are offline!! Please check your internet connection.</h1>

    return filteredRestaurants.length === 0 ? ( <Shimmer /> ) : (
        <div className="body">
            <div className="filter flex">
                <div className="m-4 p-4">
                    <input type="text" className="border border-black border-solid" value={searchText} onChange={(e)=> {
                        setSearchText(e.target.value);
                    }} />
                    <button className="px-4 py-2 m-4 bg-green-100 rounded-lg" onClick={()=> {
                        // Filter the restaurants cards and update the UI
                        const filteredRestaurants = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredRestaurants);
                    }}>Search</button>
                </div>
                <div className="m-4 p-4">
                    <button className="px-4 py-2 m-4 bg-gray-100 rounded-lg" onClick={()=> {
                        const filteredList = listOfRestaurants.filter((res)=> res.info.avgRating > 4.3);
                        setListOfRestaurants(filteredList);
                    }}>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurants.map((restaurant)=>(
                    <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
                )
                )}
            </div>
        </div>
    )
}

export default Body;