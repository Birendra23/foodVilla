import RestaurantCard from "./RestaurantCard.jsx";
// import { restaurantList } from "../contants.jsx";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/helper.jsx";
import useOnline from "../Utils/useOnline.jsx";

const Body = () => {
  const [AllRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2743842&lng=77.3733555&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isConnection = useOnline();
  if(!isConnection) {
   return <h1>you are offline!!! </h1>
  }

  if (filteredRestaurants?.length === 0) return <h1>No Restaurants found</h1>;

  return AllRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container w-screen h-15 p-5 bg-pink-200 my-2">
        <input
          type="text"
          className="focus:bg-slate-300 m-2 p-2 hover:bg-slate-400 rounded"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn p-2 m-2 bg-purple-600 hover:bg-slate-500 text-white rounded-lg"
         
          onClick={() => {
            //filter the data
            const data = filterData(searchText, AllRestaurants);
            //update the data
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list flex flex-wrap w-screen">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard className=""  {...restaurant.info} key={restaurant.info.id} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
