import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { get, getRandomNumber } from 'utils/common';

import { setFood } from 'slice';

import MenuPicker from '../component/MenuPicker';
import MenuDishes from '../component/MenuDishes';


const MenuGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: 
      "pick dish"
      "share share";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  & div {
    padding: 0;
    text-align: center;
  }
  @media all and (max-width: 767px) {
    grid-template-areas: 
      "pick"
      "dish"
      "share";
    grid-template-columns: none;
    grid-template-rows: 1fr 4fr auto;
    grid-template-columns: none;
  }
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

export default function MenuContainer() {
  const dispatch = useDispatch();

  const menu = useSelector(get('food'));
  const menus = useSelector(get('foods'));

  function pickMenu() {
    const menusCount = menus.length;
    const index = getRandomNumber(menusCount);
    const pickedMenu = menus[index]; // menus.find((food) => food.id === menus[index].id);

    dispatch(setFood(pickedMenu));
  }

  function handleClick() {
    pickMenu();
  }

  if (!menu) {
    pickMenu();
    return <p>정성껏 메뉴 선정 중...</p>;
  }

  return (
    <MenuGrid>
      <MenuPicker menu={menu} />
      <MenuDishes menu={menu} />
      <MenuButtons>
        <hr />
        <button type="button" onClick={handleClick}>다시 뽑기</button>
      </MenuButtons>
    </MenuGrid>
  );
}
