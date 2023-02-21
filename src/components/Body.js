import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import { restaurantList, SWIGGY_RESTAURANT_URL } from "../config";
import Shimmer from "./Shimmer";

function filterData(restaurants, searchText) {
    const filteredData = restaurants.filter((restaurant) => 
        restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    return filteredData;
}

const Body = () => {

    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants ] = useState([]);

    useEffect(() => {
        // API Call
        getAllRestaurants();
        // console.log(restaurants);
    }, []);

    async function getAllRestaurants() {
        const data = await fetch(SWIGGY_RESTAURANT_URL);
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    if(!allRestaurants) return null; // Early-return

    if((allRestaurants?.length > 0) && (filteredRestaurants?.length === 0))
        return <h2>No restaurant match to your filter!!!</h2>

  return (allRestaurants?.length === 0) ? (<Shimmer />) : (
    <>
        <div className="search-container">
            <input 
                type="text"
                className="search-input"
                placeholder="Search"
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value)
                }}
            />
            <button className="search-btn" onClick={() => {
                // need to filter the data
                const data = filterData(allRestaurants, searchText);
                // update the state - filteredRestaurants
                setFilteredRestaurants(data);
            }}>Search</button>
        </div>
        <div className="restaurant-list">
            {
                filteredRestaurants.map((restaurant => {
                    return <RestaurantCard vendor={restaurant.data} key={restaurant?.data?.id} />
                }))
            }
        </div>
    </>
  )
}

export default Body;