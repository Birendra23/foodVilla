
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useRestaurant from "../Utils/useRestaurant";
import { useNavigate } from "react-router-dom";

const IMG_CDN_LNK = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const RestaurantMenu= ()=>{
    const { resid } = useParams();
    
    const restaurant= useRestaurant(resid);
    const navigate= useNavigate();
    const goToCart = ()=>{
      navigate("/cart", { state: { name: "John Doe", age: 25 } });
    };
    
   if(!restaurant){
    return <Shimmer />;
   }
    return !restaurant ? (
      <Shimmer />
    ) : (
      <div className="">
        <h1>Restaurant id:{resid}</h1>
        <h2>{restaurant.name}</h2>
        <img
          width={200}
          height={100}
          src={IMG_CDN_LNK + restaurant.cloudinaryImageId}
        />
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.locality}</h3>
        <h3>{restaurant.avgRatingString}</h3>
        <h3>{restaurant.cuisines.join(",")}</h3>
        <section>
          <button
            className="border-8 border-amber-950 px-1 py-1 rounded"
            onClick={() => goToCart()}
          >
           
            Add To Cart/Navigate btn
          </button>
        </section>
      </div>
    );

};
export default RestaurantMenu;