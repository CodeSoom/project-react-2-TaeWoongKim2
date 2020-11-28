import React from 'react';

const isEmpty = (array) => array.length === 0;

export default function Menus({ menus = [] }) {
  if (!menus || isEmpty(menus)) {
    return <p>등록된 메뉴가 없습니다!</p>;
  }

  return (
    <ul>
      {menus.map((food) => (
        <li key={food.id}>
          {food.name}
        </li>
      ))}
    </ul>
  );
}
