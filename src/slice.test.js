import reducer, {
  setFood,
  setFoods,
} from './slice';

import FOODS from '../fixtures/foods';


describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      food: null,
      foods: [],
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
});
