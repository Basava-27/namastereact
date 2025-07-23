import resList from "../utils/mockdata.js";
import RestaurantCard from "./RestaurantCard.js";
import { useState } from "react";

const Body = () => {
    // Local state Variable
    const [resObj,setListOfresObj]=useState(resList);

    return (
        <div className="body">
            <div className="search">
              <input type="text" placeholder="Search for restaurants..." />
            </div>
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={()=>{
                        const filterList=resObj.filter(
                            (res)=>res.info.avgRating>4.2
                        );
                        setListOfresObj(filterList);
                    }}>
                    Top Rated Restaurants
                    </button>
            </div>
            <div className="res-container">
                {
                    resObj.map((restaurant) => (
                        <RestaurantCard
                            key={restaurant.info.id}  // Use a unique identifier
                            resData={restaurant}
                    />
                ))}
            </div>
        </div>
    );
};


export default Body;