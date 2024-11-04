import React, { useEffect } from "react";
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
  }
`;
const Weather = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeather(lat, lon);
    });
  }, []);

  const getWeather = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    const weatherId = data.id;
    const weatherKo = WeatherDescKo[weatherId];
    const weatherIcon = data.icon;
    const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    const temp = Math.round(data.temp);
    const wind = data.speed;
    return (
      <div>
        <WeaderStyle>
          <div className="weather-area">{weatherKo}</div>
          <div className="weather-detail">
            <div className="weather-temp">{temp}</div>
            <div className="weather-wind">{wind}</div>
          </div>
          <div className="weather-icon">
            <span className="material-symbols-rounded">{weatherIconAdrs}</span>
          </div>
        </WeaderStyle>
      </div>
    )
  }
}

export default Weather;