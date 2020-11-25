import React from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { setFood } from './slice';

import { get, getRandomNumber } from './utils';

export default function HomePage() {
  const history = useHistory();

  const dispatch = useDispatch();

  const foods = useSelector(get('foods'));

  function handleClick() {
    const index = getRandomNumber(foods.length);
    const selectedFood = foods.find((food) => food.id === foods[index].id);

    dispatch(setFood(selectedFood));

    const url = '/food';
    history.push(url);
  }

  return (
    <>
      <h1>오늘 뭐 먹지?!</h1>
      <p>무엇을 먹을지 고민이라면,</p>
      <p>오늘 한 끼 여기에 맡겨라!</p>
      <button type="button" onClick={handleClick}>메뉴 뽑기</button>
    </>
  );
}
