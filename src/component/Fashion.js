import React from 'react'
import fashionImg from '../media/fashion.png';

const Fashion = ({weather}) => {

  let f; // 옷차림

  if (weather?.main.temp >= 25) {f = "반팔"}
  else if (weather?.main.temp >= 20) {f = "얇은긴팔"}
  else if (weather?.main.temp >= 17) {f = "맨투맨"}
  else if (weather?.main.temp >= 13) {f = "가디건"}
  else if (weather?.main.temp >= 10) {f = "니트"}
  else if (weather?.main.temp >= 7) {f = "자켓"}
  else if (weather?.main.temp >= 3) {f = "코트"}
  else {f = "패딩"}


  return (
    <div className='fashion-box'>

      <div><img className='fashionImg' src={fashionImg}></img></div>
      <div className='font'>{f}</div>

    </div>
  )
}

export default Fashion