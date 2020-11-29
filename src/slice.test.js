import reducer, {
  setFood,
  setFoods,
  setCategories,
  setCheckedCategories,
  clearCheckedCategories,
} from './slice';

import FOODS from '../fixtures/foods';
import CATEGORIES from '../fixtures/categories';


describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      food: null,
      foods: [],
      categories: [],
      checkedCategories: [],
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setFood', () => {
    it('changes status called "food"', () => {
      const initialState = {
        food: null,
      };

      const food = FOODS[0];

      const state = reducer(initialState, setFood(food));

      expect(state.food).toEqual(food);
    });
  });

  describe('setFoods', () => {
    it('changes status called "foods"', () => {
      const initialState = {
        foods: [],
      };

      const state = reducer(initialState, setFoods(FOODS));

      expect(state.foods).toHaveLength(FOODS.length);
    });
  });

  describe('setCategories', () => {
    it('changes status called "categories"', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(CATEGORIES));

      expect(state.categories).toHaveLength(CATEGORIES.length);
    });
  });

  describe('setCheckedCategories', () => {
    it('add a new checked category at "checkCategories"', () => {
      const initialState = {
        checkedCategories: [],
      };

      const newCheckedCategory = CATEGORIES[0];
      const state = reducer(initialState, setCheckedCategories(newCheckedCategory));

      expect(state.checkedCategories).toHaveLength(1);
      expect(state.checkedCategories).toContain(newCheckedCategory);
    });
  });

  describe('clearCheckedCategories', () => {
    it('clear state named "checkCategories"', () => {
      const initialState = {
        checkedCategories: CATEGORIES,
      };

      const state = reducer(initialState, clearCheckedCategories());

      expect(state.checkedCategories).toHaveLength(0);
    });
  });
});
