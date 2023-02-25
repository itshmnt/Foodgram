import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, ITEM_IMG_CDN_URL, SWIGGY_MENU_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  
  useEffect(() => {
    getRstaurantInfo();
  }, []);

  async function getRstaurantInfo() {
    try{
      const response = await fetch(SWIGGY_MENU_URL + resId);
      const json = await response.json();
      setRestaurant(json?.data);
    } catch(error) {
      console.log(error);
    }
  }

    return (!restaurant) ? <Shimmer /> : (
      <div className="restaurant-menu">
        <div className="restaurant-summary">
          <img 
            className="restaurant-img"
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
            alt={restaurant?.name}
          />
          <div className="restaurant-summary-details">
            <h2 className="restaurant-title">{restaurant?.name}</h2>
            <p className="restaurant-tags">{restaurant?.cuisines.join(", ")}</p>
            <div className="restaurant-details">
              <div 
                className="restaurant-rating" 
                style={(restaurant?.avgRating) < 4
                          ? { backgroundColor : "var(--light-red)" }
                          : (restaurant?.avgRating) === "--"
                          ? { backgroundColor : "white", color : "black" }
                          : { color : "white" }
                }>
                  <i className="fa-solid fa-star"></i>
                  <span>{restaurant?.avgRating}</span>
                </div>
                <div>|</div>
                <div>{restaurant?.sla.slaString}</div>
                <div>|</div>
                <div>{restaurant?.costForTwoMsg}</div>
            </div>
          </div>
        </div>

        <div className="restaurant-menu-content">
          <div className="menu-items-container">
            <div className="menu-title-wrap">
              <h3 className="menu-title">Recommended</h3>
              <p className="menu-count">
                {Object.keys(restaurant?.menu?.items).length} ITEMS
              </p>
            </div>
            <div className="menu-item-list">
          {Object.values(restaurant?.menu.items).map((item) => (
            <div className="menu-item" key={item?.id}>
              <div className="menu-item-details">
                <h3 className="item-title">{item?.name}</h3>
                <p className="item-cost">
                  {item?.price > 0 
                    ? new Intl.NumberFormat("en-IN", {
                      style : "currency",
                      currency : "INR"
                    }).format(item?.price / 100)
                    : " "
                  }
                </p>
                <p className="item-desc">{item?.description}</p>
              </div>
              <div className="menu-img-wrapper">
                {item?.cloudinaryImageId && (
                  <img 
                    className="menu-item-img"
                    src={ITEM_IMG_CDN_URL + item?.cloudinaryImageId}
                    alt={item?.name}
                  />
                )}
                <button className="add-btn">ADD +</button>
              </div>
            </div>
          ))}
        </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default RestaurantMenu;