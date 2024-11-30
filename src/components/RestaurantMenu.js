import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurnatMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards, categories } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const itemCategories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>

            <h2>Menu</h2>
            <ul>
                {itemCards && itemCards?.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name} - Rs.{(item.card.info.price /100) || (item.card.info.defaultPrice / 100)}</li>
                ))}               

            </ul>
            <div>
                {
                    categories && categories?.map((item, index) => (
                        <ul key={index}>
                            <li><b>{item.title}</b></li>
                            {item && item?.itemCards?.map((item) => (
                                <li key={item.card.info.id}>{item.card.info.name} - Rs.{(item.card.info.price /100) || (item.card.info.defaultPrice / 100)}</li>
                            ))}                        
                        </ul>
                    ))
                }
            </div>

            
        </div>
    )
};

export default RestaurnatMenu;