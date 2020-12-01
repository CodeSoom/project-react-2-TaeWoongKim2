import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import {
  setCheckedCategory,
  clearCheckedCategory,
} from './slice';

import { get } from './utils';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories')) || [];
  const checkedCategory = useSelector(get('checkedCategory')) || {};

  function handleClick(category) {
    if (!category) {
      dispatch(clearCheckedCategory());
      return;
    }
    dispatch(setCheckedCategory(category));
  }

  return (
    <Categories
      categories={categories}
      checkedCategory={checkedCategory}
      onClick={handleClick}
    />
  );
}
