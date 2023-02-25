import React from 'react'
import Header from '@components/Header';
import '@styles/Map.scss';

const Map = () => {
  return (
    <>
      <Header/>
      <div className='Map'>
        <div className='map-container'>
          <img src="https://fortnite-api.com/images/map_en.png" alt=""/>
        </div>
      </div>
    </>
  )
}

export default Map;