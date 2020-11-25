import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

const isEmpty = (array) => array.length === 0;

export default function FoodListPage() {
  const foods = useSelector(get('foods'));

  return (
    <>
      <h1>메뉴판</h1>
      {(!foods || isEmpty(foods))
        ? <p>등록된 메뉴가 없습니다!</p>
        : (
          <ul>
            {foods.map((food) => (
              <li key={food.id}>
                {food.name}
              </li>
            ))}
          </ul>
        )}
    </>
  );
}
