import React from 'react'
import { useState } from 'react';

import WindBox from './WindBox';
import Fashion from './Fashion';

import searchIcon from '../media/search.png';

const WeatherBox = ({weather, setCity}) => {

    const [text, setText] = useState("");

    const iconURL = `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`;

    const onChange =(e)=> {
        setText(e.target.value);
    }

    const onClick =()=> {
        setCity(text);
    }

    return (
        <div className='weather-box'>

            <div className='searchBox'>

                <input type="text"
                    placeholder='City Name'
                    className='searchInput'
                    onChange={onChange}

                />
                <button alt="검색버튼" className='searchBtn' onClick={onClick}><img src={searchIcon}/></button>

            </div>

            <div className='cityName'>{weather?.name}, {weather?.sys.country}</div>

            <div className='temp'>{Number(weather?.main.temp).toFixed(1)}℃ / {Number(weather?.main.temp*1.8+32).toFixed(1)}℉</div>

            <div className='icon'><img className='iconImg' src={iconURL}></img></div>

            <div className='information'>
                <WindBox weather={weather}/>
                <Fashion weather={weather}/>
            </div>
            

        </div>
    )
}

export default WeatherBox