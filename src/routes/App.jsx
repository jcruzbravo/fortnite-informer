import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';  
import '@styles/global.scss';
import Home from "@pages/Home";
import Shop from "@containers/Shop";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;