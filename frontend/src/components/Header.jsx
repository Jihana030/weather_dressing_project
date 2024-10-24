import React from "react";
import styled from 'styled-components';
import Category from "./Category";
import Weather from "./Weather";

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 10% 20px 10%;
  color: var(--main-black);
  font-size: 15px;
  position: relative;
`;
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

const Header = () => {
  const date = new Date();
  const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const dayOfWeek = week[date.getDay()];
  const today = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${dayOfWeek}`;
  const area = '대구';
  const temp = '20℃';
  const wind = '2m/s';
  const icon = 'sunny';

  return (
    <HeaderStyle>
      <div>{today}</div>
      <WeaderStyle>
        <div className="weather-area">{area}</div>
        <div className="weather-detail">
          <div className="weather-temp">{temp}</div>
          <div className="weather-wind">{ wind }</div>
        </div>
        <div className="weather-icon">
          <span className="material-symbols-rounded">{ icon }</span>
        </div>
      </WeaderStyle>
      <Weather></Weather>
      <Category></Category>
    </HeaderStyle>
    )
}

export default Header;