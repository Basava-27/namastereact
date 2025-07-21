import resObj from "../utils/mockdata.js";
import RestaurantCard from "./RestaurantCard.js";

const Body = () => {
    return (
        <div className="body">
            <div className="search">
              <input type="text" placeholder="Search for restaurants..." />
            </div>
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={()=>{
                        console.log("Button Clicked");
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