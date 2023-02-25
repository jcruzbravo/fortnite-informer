import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';  
import '@styles/global.scss';
import Home from "@pages/Home";
import Shop from "@containers/Shop";
import Map from "@containers/Map";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/map" element={<Map/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;