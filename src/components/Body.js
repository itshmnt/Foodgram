import { useState } from "react";

import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";

function filterData(restaurants, searchText) {
    const filteredData = restaurants.filter((restaurant) => 
        restaurant.info.name.includes(searchText)
    );
    return filteredData;
}

const Body = () => {

    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList);

  return (
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
                //need to filter the data
                const data = filterData(restaurants, searchText);
                // update the state - restaurant
                setRestaurants(data);
            }}>Search</button>
        </div>
        <div className="restaurant-list">
            {
                restaurants.map((outlet => {
                    return <RestaurantCard vendor={outlet.info} key = {outlet.info.id} />
                }))
            }
        </div>
    </>
  )
}

export default Body;