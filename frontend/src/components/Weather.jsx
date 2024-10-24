import React, { useEffect, useState } from "react";
import WeatherDescKo from "./WeatherDescKo";

const Weather = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [loding, setLoding] = useState(false);
  const [weather, setWeather] = useState();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeather(lat, lon);
    });
  }, []);

  const getWeather = async (lat, lon) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      let res = await fetch(url);
      setLoding(true);
      let data = await res.json();
      const weatherId = res.data.weather[0].id;
      const weatherKo = WeatherDescKo[weatherId];
      const weatherIcon = res.data.weather[0].icon;
      const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
      const temp = Math.round(res.data.main.temp);

      setWeather(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>{ weather}</div>
  )
}

export default Weather;