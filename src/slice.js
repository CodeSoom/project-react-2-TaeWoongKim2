import { createSlice } from '@reduxjs/toolkit';

import { fetchFoods } from './services/api';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    food: null,
    foods: [],
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
  },
});

export const { setFood, setFoods } = actions;

export function loadFoodData() {
  return async (dispatch) => {
    dispatch(setFoods([]));

    const foods = await fetchFoods();

    dispatch(setFoods(foods));
  };
}


export default reducer;
