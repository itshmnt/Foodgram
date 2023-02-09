import RestaurantCard from "./RestaurantCard";
import { restaurant } from "../config";

const Body = () => {
  return (
    <div className="restaurant-list">
        {
            restaurant.map((outlet => {
                return <RestaurantCard vendor={outlet.info} key = {outlet.info.id} />
            }))
        }
    </div>
  )
}

export default Body;