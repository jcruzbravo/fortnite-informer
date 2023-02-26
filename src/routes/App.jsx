import React from "react";
import { HashRouter, Routes, Route} from 'react-router-dom';  
import '@styles/global.scss';
import Home from "@pages/Home";
import Shop from "@containers/Shop";
import Map from "@containers/Map";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="#/" element={<Home/>}/>
        <Route path="#/shop" element={<Shop/>}/>
        <Route path="#/map" element={<Map/>}/>
      </Routes>
    </HashRouter>
  );
};

export default App;