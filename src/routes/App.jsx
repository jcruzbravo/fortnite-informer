import React from "react";
import { Routes, Route} from 'react-router-dom';  
import '@styles/global.scss';
import Layout from '@pages/Layout'
import Home from "@pages/Home";
import Shop from "@containers/Shop";
import Map from "@containers/Map";
import NotFound from "@pages/NotFound";
import News from "@containers/News";

const App = () => {
  return (
      <Routes>
        <Route exact path="/" element={<Layout/>}>
          <Route path="home" element={<Home/>}/>
          <Route path="shop" element={<Shop/>}/>
          <Route path="news" element={<News/>}/>
          <Route path="map" element={<Map/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
  );
};

export default App;