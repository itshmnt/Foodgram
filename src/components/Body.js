import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import { SWIGGY_RESTAURANT_URL } from "../config";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
                    return (
                        <Link to={"/restaurant/" + restaurant.data.id} key={restaurant?.data?.id}>
                            <RestaurantCard vendor={restaurant.data} />
                        </Link>
                    )
                }))
            }
        </div>
    </>
  )
}

export default Body;