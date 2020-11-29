import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { setFood } from './slice';

import { get, getRandomNumber } from './utils';


const MenuSection = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: 
      "pick dish"
      "share share";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 80px;
  @media all and (max-width: 767px) {
    grid-template-areas: 
      "pick"
      "share"
      "dish";
    grid-template-columns: 1fr 80px 1fr;
    grid-template-rows: none;
    grid-template-columns: none;
  }
`;

const MenuPick = styled.div`
  grid-area: pick;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  & > h3 {
    margin: 0 0 10px;
    font-size: 24px;
  }
  & > hr {
    margin: 0;
    border: 0;
    border-top: 2px solid #eee;
    width: 90%;
  }
  & > p {
    margin: 1em 0 0 0;
  }
`;

const MenuDishes = styled.div`
  grid-area: dish;
`;

const MenuButtons = styled.div`
  grid-area: share;
  text-align: center;
  & > button {
    height: 32px;
    line-height: 32px;
    color: #040404;
    background: #ffffffa6;
    border: 1px solid #000;
    cursor: pointer;
    &:hover {
      background: #fff;
      border: 1px solid #333;
    };
  }
`;

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
      <MenuSection>
        <p>정성껏 메뉴 선정 중...</p>
      </MenuSection>
    );
  }

  return (
    <MenuSection>
      <MenuGrid>
        <MenuPick>
          <h3>{food.name}</h3>
          <hr />
          <p>
            오늘
            {' '}
            {food.name}
            {' '}
            각 이다!
          </p>
        </MenuPick>
        <MenuDishes />
        <MenuButtons>
          <button type="button" onClick={handleClick}>다시 뽑기</button>
        </MenuButtons>
      </MenuGrid>
    </MenuSection>
  );
}
