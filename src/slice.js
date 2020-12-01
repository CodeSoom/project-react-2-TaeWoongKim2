import { createSlice } from '@reduxjs/toolkit';

import { fetchFoods, fetchCategories } from './services/api';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    food: null,
    foods: [],
    categories: [],
    checkedCategories: [],
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
    setCheckedCategories(state, { payload: newCheckedCategory }) {
      const { checkedCategories } = state;
      const isExistIndex = checkedCategories.findIndex(({ id }) => (id === newCheckedCategory.id));
      if (isExistIndex >= 0) {
        const copyCheckedCategories = [...checkedCategories];
        copyCheckedCategories.splice(isExistIndex, 1);
        return {
          ...state,
          checkedCategories: copyCheckedCategories,
        };
      }

      return {
        ...state,
        checkedCategories: [...checkedCategories, newCheckedCategory],
      };
    },
    clearCheckedCategories(state) {
      return {
        ...state,
        checkedCategories: [],
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
  setCheckedCategories,
  clearCheckedCategories,
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
