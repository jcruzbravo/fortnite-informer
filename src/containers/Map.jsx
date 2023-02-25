import React from 'react'
import Header from '@components/Header';

const Map = () => {
  return (
    <>
      <Header/>
      <div className='Map'>
        <img src="https://fortnite-api.com/images/map_en.png" alt="" style={{width: 800}}/>
      </div>
    </>
  )
}

export default Map;