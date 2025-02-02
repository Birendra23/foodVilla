import { Navigate } from "react-router-dom";
import { IMG_CDN_URL } from "../contants.jsx";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="card break-words object-cover w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img className="w-auto" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-2xl">{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating} stars</h4>
   
    </div>
  );
};

export default RestaurantCard;
