import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import {
  setCheckedCategories,
  clearCheckedCategories,
} from './slice';

import { get } from './utils';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories')) || [];
  const checkedCategories = useSelector(get('checkedCategories')) || [];

  function handleClick(category) {
    if (!category) {
      dispatch(clearCheckedCategories());
      return;
    }
    dispatch(setCheckedCategories(category));
  }

  return (
    <Categories
      categories={categories}
      checkedCategories={checkedCategories}
      onClick={handleClick}
    />
  );
}
