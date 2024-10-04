import React from "react";

const Header = () => {
  const date = new Date();
  const today = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  const area = '대구';
  const temp = '20℃';
  const wind = '2m/s';
  const icon = 'sunny';

  return (
    <div>
      <div>{today}</div>
      <div>
        <div>{area}</div>
        <div>
          <div>{temp}</div>
          <div>{ wind }</div>
        </div>
        <div>
          <span className="material-symbols-rounded">{ icon }</span>
        </div>
      </div>
    </div>
    )
}

export default Header;