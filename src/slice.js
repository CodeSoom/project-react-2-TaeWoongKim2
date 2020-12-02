import { createSlice } from '@reduxjs/toolkit';

import { fetchFoods, fetchCategories } from './services/api';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    food: null,
    foods: [],
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

export function loadCategoryData() {
  return async (dispatch) => {
    dispatch(setCategories([]));

    const categories = await fetchCategories();

    dispatch(setCategories(categories));
  };
}

export default reducer;
