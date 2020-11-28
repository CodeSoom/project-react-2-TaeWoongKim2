import React from 'react';

import { useSelector } from 'react-redux';

import Menus from './Menus';

import { get } from './utils';


export default function MenusContainer() {
  const menus = useSelector(get('foods'));

  return (
    <Menus menus={menus} />
  );
}
