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

// Higher Order Component
// input - Restaurant Card -> Restaurant Card Aggregated Discount

export const withAggregatedDiscount = (RestaurantCard) => {
    // returning new component with aggregated discount
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-1 p-2 rounded-lg text-sm">{props?.resData?.info?.aggregatedDiscountInfoV3?.discountTag} {props?.resData?.info?.aggregatedDiscountInfoV3?.header} {props?.resData?.info?.aggregatedDiscountInfoV3?.subHeader}</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;