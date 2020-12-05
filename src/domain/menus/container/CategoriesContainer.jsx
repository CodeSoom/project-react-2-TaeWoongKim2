import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { get } from 'utils/common';

import {
  setCheckedCategory,
  clearCheckedCategory,
} from 'slice';

import Categories from '../component/Categories';


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
