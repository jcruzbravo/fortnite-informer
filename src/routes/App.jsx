import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';  
import '@styles/global.scss';
import Home from "@pages/Home";
import Shop from "@containers/Shop";
import Map from "@containers/Map";
import NotFound from "@pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/map" element={<Map/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;