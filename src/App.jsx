import React from "react";
import MarketPlace from "./pages/marketplace/MarketPlace";
import Home from "./pages/Home";
import {Routes, Route  } from "react-router-dom";
import About from "./pages/About";
import MainLayout from "./layout/MainLayout";
import MarketPlaceLayout from "./layout/MarketPlaceLayout";
import Reviews from "./pages/marketplace/Reviews";
import PetDetails from "./pages/marketplace/PetDetails";


function App() {
  
  return (
    <React.Fragment>
    
      <Routes>
        <Route path="/" element={<MainLayout/>} >
                <Route index element={<Home/>} />    
                    <Route path="/marketplace" element={<MarketPlaceLayout/>}>
                        <Route index element={<MarketPlace />} />
                        <Route path=":petID" element={<PetDetails />} />
                        <Route path="reviews" element={<Reviews />} />
                </Route>
        </Route>

      <Route path="/about" element={<About/>} />


      </Routes>
    </React.Fragment>
  
  );
}

export default App;
