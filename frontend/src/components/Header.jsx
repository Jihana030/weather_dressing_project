import React, { useEffect, useState } from "react";

const Header = () => {
    const day = new Date();
    // 날씨
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [weather, setWeather] = useState('');
    //위치 가져오기
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getWeather(lat, lon);
        });
    }, []);
    const getWeather = async (lat, lon) => {
        try {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
            )
            const weatherId = res.data.weather[0].id;
            const weatherKo = weatherDescKo[weatherId];
            const weatherIcon = res.data.weather[0].icon;
            const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            const temp = Math.round(res.data.main.temp);

            setWeather({
                description: weatherKo,
                name: cityName,
                temp: temp,
                icon: weatherIconAdrs,
            });
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <div>{day}</div>
            <div>{weather}</div>
        </div>
    )
}