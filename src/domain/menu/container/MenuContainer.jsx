import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { playMenuPicker } from 'slice';

import { get, getRandomSomethingPicker } from 'utils/common';

import styled from '@emotion/styled';

import LOADING from 'assets/images/food-loading.gif';

import MenuPicker from '../component/MenuPicker';
import MenuDishes from '../component/MenuDishes';
import MenuButtons from '../component/MenuButtons';


const MenuGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: 
      "pick dish"
      "share share";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  grid-gap: 1em;
  & div {
    padding: 0;
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

const LoadingImage = styled.img`
  height: 33.33%;
  @media all and (max-width: 767px) {
    height: 12em;
  }
`;

export default function MenuContainer() {
  const dispatch = useDispatch();

  const menu = useSelector(get('food'));
  const menus = useSelector(get('foods'));
  const maxim = useSelector(get('foodMaxim'));
  const maxims = useSelector(get('foodMaxims'));
  const loading = useSelector(get('foodPickerLoading'));

  function dispatchMenuPicker() {
    const pickedMenu = getRandomSomethingPicker(menus);
    const pickedMaxim = getRandomSomethingPicker(maxims);

    dispatch(playMenuPicker(
      { food: pickedMenu, foodMaxim: pickedMaxim },
    ));
  }

  function handlePickMenuClick() {
    dispatchMenuPicker();
  }

  if (loading) {
    return <LoadingImage src={LOADING} alt="Loading..." />;
  }

  if (!menu) {
    dispatchMenuPicker();
    return <></>;
  }

  return (
    <MenuGrid>
      <MenuPicker
        menu={menu}
        maxim={maxim}
      />
      <MenuDishes
        menu={menu}
      />
      <MenuButtons
        onPickMenuClick={handlePickMenuClick}
      />
    </MenuGrid>
  );
}
