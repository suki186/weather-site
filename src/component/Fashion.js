import React from 'react'
import fashionImg from '../media/fashion.png';

const Fashion = ({weather}) => {
  return (
    <div className='fashion-box'>

        <div>
            <img className='fashionImg' src={fashionImg}></img>
            {weather?.main.temp}
        </div>

    </div>
  )
}

export default Fashion