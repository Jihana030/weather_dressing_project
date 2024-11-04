import React from "react";
import styled from "styled-components";

const CategoryStyle = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  ul {
    display: flex;
    flex-direction: row;
    justify-align: center;
    align-items: center;
    overflow: hidden;
    border-radius: 0 0 0 10px;
  }
  li {
    background: var(--natural);
    padding: 20px;
    cursor: pointer;
    text-align: center;
    font-size: 16px
  }
  li.sel {
    color: var(--main-white);
  }
  li:hover {
    color: var(--main-white);
    transition: all 0.4s;
  }
`

const Category = () => {
  return (
    <CategoryStyle>
      <ul>
        <li className="sel">옷장</li>
        <li>지역변경</li>
        <li>건의게시판</li>
        <li>로그인</li>
      </ul>
    </CategoryStyle>
  )
}

export default Category;