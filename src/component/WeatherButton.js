import React from 'react'
import { Button } from 'react-bootstrap';


const WeatherButton = () => {
  return (
    <div>
        <Button variant="info">현재위치</Button>
        <Button variant="info">파리</Button>
        <Button variant="info">로마</Button>
        <Button variant="info">도쿄</Button>

    </div>
  )
}

export default WeatherButton