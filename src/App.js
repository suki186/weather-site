import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

//1. 앱이 실행되면 현재 위치의 날씨 보이기
//2. 도시, 섭씨, 화씨, 날씨상태
//3. 도시 버튼들 (현재, 다른도시들)
//4. 도시 버튼을 클릭하면 도시별 날씨 보이기
//5. 현재위치 버튼을 누르면 다시 현재위치 날씨 보이기
//6. 데이터를 들고오는 동안 로딩 스피너 보이기

function App() {
  
  const API_KEY = "49a5da1cbad55ace19bde433006f8cab";
  

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  // 현재 날씨 정보 가져오기
  const getWeatherCurrentLocation = async(lat, lon) => {

    // await(기다림)은 비동기적 -> async 함수
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

    // json파일로 추출
    const current = await response.json();
    console.log("현재 날씨: ", current);

    setWeather(current);
  }

  const getWeatherCity = async() => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

    const current = await response.json();
    console.log("현재 날씨: ", current);

    setWeather(current);
  }

  const getCurrentLocation =()=> {
    // get current location javascript 구글링
    navigator.geolocation.getCurrentPosition((position)=> {
      const lat = position.coords.latitude; // 위도
      const lon = position.coords.longitude; // 경도

      console.log("현재 위치: ", lat, ",", lon);

      getWeatherCurrentLocation(lat, lon);
      //getWeatherCurrentLocation(52.796598, -2.125131);

    });
  }

  useEffect(() => {
    if (city == "") {
      getCurrentLocation(); // 현재 위치 가져오기
    }
    else {
      getWeatherCity(); // 도시 날씨 가져오기
    }
    
  }, [city]); //componentDidMount

  return (
    <div className='background'>
      <div className='container'>
        <WeatherBox weather={weather} setCity={setCity}/>
        <WeatherButton />

      </div>
      
    </div>
  );
}

export default App;
