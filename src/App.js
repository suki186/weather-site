import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import ClipLoader from "react-spinners/ClipLoader";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 현재 날씨 정보 가져오기
  const getWeatherCurrentLocation = async(lat, lon) => {

    try {
      setError(null);
      // await(기다림)은 비동기적 -> async 함수
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

      // json파일로 추출
      const current = await response.json();
      console.log("현재 날씨: ", current);

      setWeather(current);

    } catch (e) {

      console.log(e);
      setError("Failed to fetch weather data");

    } finally {
      setLoading(false);
    }

    
  }

  const getWeatherCity = async() => {

    try {
      setError(null);

      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

      const current = await response.json();
      console.log("현재 날씨: ", current);

      if (current.cod !== 200) throw new Error(current.message);
      setWeather(current);

    } catch (e) {
      
      console.log(e);
      setError("Please enter a valid city name");

    } finally {
      setLoading(false);
    }
    
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

  // 홈버튼 누르면 현재위치 날씨 보여주기
  const handleHome =()=> {
    setCity("");
    setLoading(true);
    setError(null);
  };

  useEffect(() => {
    if (city == "") {
      setLoading(true);
      getCurrentLocation(); // 현재 위치 가져오기
    }
    else {
      setLoading(true);
      getWeatherCity(); // 도시 날씨 가져오기
    }
    
  }, [city]); //componentDidMount

  return (
    <div className='background'>

      {
        //loading이 true면 로딩스피너, false면 box 보이기
      loading? (
        <div className='container'>
          <ClipLoader color="#87CEEB" loading={loading} size={30}/>
        </div>
      ) : (

        <div className='container'>
          {error && <div className='errorMsg'>{error}</div>}
    
          <WeatherBox weather={weather} setCity={setCity} handleHome={handleHome}/>
          

        </div>
      )}
      
    </div>
  );
}

export default App;
