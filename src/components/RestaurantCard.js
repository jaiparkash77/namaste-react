import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;
    return (
        // custom width - w-[250px]
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg" src={CDN_URL+cloudinaryImageId} alt={name} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} Stars</h5>
            <h5>{costForTwo}</h5>
        </div>
    )
}

export default RestaurantCard;