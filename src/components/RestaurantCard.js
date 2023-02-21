import { IMG_CDN_URL } from "../config";

const RestaurantCard = (props) => {
    console.log(props);
    return (
        <div className="card">
            <img
                src={
                IMG_CDN_URL 
                + props.vendor?.cloudinaryImageId 
                }
                alt="vendor_logo" 
            />
            <h2>{props.vendor?.name}</h2>
            <h3>{props.vendor?.cuisines.join(", ")}</h3>
            <h4>{props.vendor?.avgRating} stars</h4>
        </div>
    );
}

export default RestaurantCard;