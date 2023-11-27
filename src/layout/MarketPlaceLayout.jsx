import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const MarketPlaceLayout = () => {
  return (
    <div>
        <div>
        <NavLink to="/marketplace">Back to market place</NavLink>
        <NavLink to="/marketplace/reviews">Reviews</NavLink>
    </div>
        <Outlet/>
    </div>

  );
}

export default MarketPlaceLayout