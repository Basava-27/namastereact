import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 * - logo
 * - Nav Items
 * body
 * -search
 * - restaurant container
 *  - testaurant card
 * footer
 * - copyright
 * - address
 * - contact
 */

const Header=()=>{
  return (
    <div className="header">
      <div>
        <img 
        className="logo"
        src="https://icon-library.com/images/food-app-icon/food-app-icon-5.jpg"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};



const RestaurantCard=()=>{
  return (
    <div className="res-card">
      <img 
      className="res-logo" 
      alt="press logo" 
      src="https://b.zmtcdn.com/data/o2_assets/110a09a9d81f0e5305041c1b507d0f391743058910.png"/>
      <h3>Meghana Foods</h3>
      <h4>Burger,Western,American</h4>
      <h4>4.4 stars</h4>
      <h4>36 minutes</h4>
    </div>
  );
}

const Body=()=>{
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
      </div>
    </div>
  );
}


const AppLayout=()=>{
  return (
  <div className="app">
    <Header/>
    <Body/>
  </div>
  );
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);


 