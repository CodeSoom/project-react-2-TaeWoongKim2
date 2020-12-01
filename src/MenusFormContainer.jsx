import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import MenusForm from './MenusForm';

import { changeMenuFields } from './slice';

import { get } from './utils';

export default function MenusFormContainer() {
  const dispatch = useDispatch();

  const { menuName } = useSelector(get('menusFields')) || { menuName: '' };

  function handleChange({ name, value }) {
    dispatch(changeMenuFields({ name, value }));
  }

  function handleClick() {

  }

  return (
    <MenusForm
      menuName={menuName}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}
