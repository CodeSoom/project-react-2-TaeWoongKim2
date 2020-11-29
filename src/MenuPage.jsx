import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setFood } from './slice';

import { get, getRandomNumber } from './utils';

export default function MenuPage() {
  const dispatch = useDispatch();

  const food = useSelector(get('food'));
  const foods = useSelector(get('foods'));

  function handleClick() {
    const index = getRandomNumber(foods.length);
    const selectedFood = foods.find((foodItem) => foodItem.id === foods[index].id);

    dispatch(setFood(selectedFood));
  }

  if (!food) {
    return (
      <p>정성껏 메뉴 선정 중...</p>
    );
  }

  return (
    <>
      <h1>{food.name}</h1>
      <p>
        {food.name}
        {' '}
        어때?
      </p>
      <p>
        {food.name}
        {' '}
        소개하는 글!
      </p>
      <button type="button" onClick={handleClick}>다시 뽑기</button>
    </>
  );
}
