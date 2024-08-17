import React from 'react'
//import { Button } from 'react-bootstrap';

import homeIcon from '../media/homeBtn.png';

const WeatherButton = ({handleHome}) => {
  return (
    <div>
        <button className='homeBtn' onClick={()=>handleHome()}>
          <img src={homeIcon} />
        </button>

    </div>
  )
}

export default WeatherButton