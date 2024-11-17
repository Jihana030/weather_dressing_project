import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import WeatherDescKo from "./WeatherDescKo";

const WeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  span {
    color: var(--natural);
    font-size: 70px;
    margin: 0 20px 0 10px;
  }
  div.weather-area {
    font-size: 24px;
    font-weight: 600;
  }
  div.weather-detail {
    margin: 0 20px 0 20px;
    font-weight: 600;
    font-size: 28px;
    :first-child {
      color: var(--apricot);
    }
    .weather-wind{
      color:var(--natural);
    }
  }
  div.weather-icon {
  width: 100px;
  height: 100px;
  }
  div.weather-icon img {
    width:100%;
    height:100%;
  }
`;
const Weather = () => {
  const [weatherArea, setWeatherArea] = useState('');
  const [weatherTemp, setWeatherTemp] = useState('');
  const [weatherWind, setWeatherWind] = useState('');
  const [weatherIcon, setWeatherIcon] = useState('');
  const [weatherCode, setWeatherCode] = useState(WeatherDescKo[200]);
  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeather(lat, lon);
    });
    const getWeather = async (lat, lon) => {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      setWeatherArea(data.name);
      const weatherIcon = data.weather[0].icon;
      setWeatherIcon(`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`);
      setWeatherTemp(Math.round(data.main.temp));
      setWeatherWind(Math.round(data.wind.speed));
      setWeatherCode(WeatherDescKo[data.weather[0].id]);
    }
  }, []);
  return (
      <WeaderStyle>
        <div className="weather-area">{weatherArea}</div>
        <div className="weather-detail">
          <div className="weather-temp">{weatherTemp}℃</div>
          <div className="weather-wind">{weatherWind}m/s</div>
        </div>
        <div className="weather-icon">
          <img src={weatherIcon} alt={weatherCode}></img>
        </div>
      </WeaderStyle>
  )
}

export default Weather;