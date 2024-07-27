import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-img" src={CDN_URL+cloudinaryImageId} alt={name} />
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} Stars</h5>
            <h5>{costForTwo}</h5>
        </div>
    )
}

export default RestaurantCard;