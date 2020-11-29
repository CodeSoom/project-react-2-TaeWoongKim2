import React from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { setFood } from './slice';

import { get, getRandomNumber } from './utils';

export default function HomePage() {
  const history = useHistory();

  const dispatch = useDispatch();

  const foods = useSelector(get('foods'));

  function handleMenuPickerClick() {
    const index = getRandomNumber(foods.length);
    const selectedFood = foods.find((food) => food.id === foods[index].id);

    dispatch(setFood(selectedFood));

    history.push('/menu');
  }

  function handleMenuListClick() {
    history.push('/menus');
  }

  return (
    <>
      <h1>오늘 뭐 먹지?!</h1>
      <p>무엇을 먹을지 고민이라면,</p>
      <p>오늘 한 끼 여기에 맡겨라!</p>
      <button type="button" onClick={handleMenuPickerClick}>메뉴 뽑기</button>
      <button type="button" onClick={handleMenuListClick}>메뉴판 보기</button>
    </>
  );
}
