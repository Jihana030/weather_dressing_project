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