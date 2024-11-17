import React from "react";
import styled from "styled-components";
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

const Header = () => {
  const date = new Date();
  const week = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const dayOfWeek = week[date.getDay()];
  const today = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${dayOfWeek}`;

  return (
    <HeaderStyle>
      <div>{today}</div>
      <Weather></Weather>
      <Category></Category>
    </HeaderStyle>
  );
};

export default Header;
