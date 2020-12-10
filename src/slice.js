import { createSlice } from '@reduxjs/toolkit';

import {
  fetchFoods,
  fetchFoodMaxims,
  fetchCategories,
} from './services/api';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    food: null,
    foods: [],
    foodMaxim: null,
    foodMaxims: [],
    categories: [],
    checkedCategory: {},
    menusFields: {
      menuName: '',
    },
  },
  reducers: {
    setFood(state, { payload: food }) {
      return {
        ...state,
        food,
      };
    },
    setFoods(state, { payload: foods }) {
      return {
        ...state,
        foods,
      };
    },
    setFoodMaxim(state, { payload: foodMaxim }) {
      return {
        ...state,
        foodMaxim,
      };
    },
    setFoodMaxims(state, { payload: foodMaxims }) {
      return {
        ...state,
        foodMaxims,
      };
    },
    setCategories(state, { payload: categories }) {
      return {
        ...state,
        categories,
      };
    },
    setCheckedCategory(state, { payload: checkedCategory }) {
      return {
        ...state,
        checkedCategory,
        menusFields: {
          ...state.menusFields,
          menuName: '',
        },
      };
    },
    clearCheckedCategory(state) {
      return {
        ...state,
        checkedCategory: {},
        menusFields: {
          ...state.menusFields,
          menuName: '',
        },
      };
    },
    changeMenuFields(state, { payload: { name, value } }) {
      return {
        ...state,
        menusFields: {
          ...state.menusFields,
          [name]: value,
        },
      };
    },
  },
});

export const {
  setFood,
  setFoods,
  setFoodMaxim,
  setFoodMaxims,
  setCategories,
  setCheckedCategory,
  clearCheckedCategory,
  changeMenuFields,
} = actions;

export function loadFoodData() {
  return async (dispatch) => {
    dispatch(setFoods([]));

    const foods = await fetchFoods();

    dispatch(setFoods(foods));
  };
}

export function loadFoodMaximData() {
  return async (dispatch) => {
    dispatch(setFoodMaxims([]));

    const foodMaxims = await fetchFoodMaxims();

    dispatch(setFoodMaxims(foodMaxims));
  };
}

export function loadCategoryData() {
  return async (dispatch) => {
    dispatch(setCategories([]));

    const categories = await fetchCategories();

    dispatch(setCategories(categories));
  };
}


export default reducer;
