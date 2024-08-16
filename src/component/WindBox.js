import React from 'react'
import windImg from '../media/wind.png';


const WindBox = ({weather}) => {
  return (
    <div className='wind-box'>

        <div>
            <img className='windImg' src={windImg}></img>
            {weather?.wind.speed} m/s
        </div>

    </div>
  )
}

export default WindBox