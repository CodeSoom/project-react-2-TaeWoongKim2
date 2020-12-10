import reducer, {
  setFood,
  setFoods,
  setFoodMaxim,
  setFoodMaxims,
  setCategories,
  setCheckedCategory,
  clearCheckedCategory,
  changeMenuFields,
} from 'slice';

import FOODS from '__fixtures__/foods';
import MAXIMS from '__fixtures__/foodMaxims';
import CATEGORIES from '__fixtures__/categories';


describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      food: null,
      foods: [],
      foodMaxim: null,
      foodMaxims: [],
      categories: [],
      checkedCategory: {},
      menusFields: {
        menuName: '',
      },
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

  describe('setFoodMaxim', () => {
    it('changes status called "foodMaxim"', () => {
      const initialState = {
        foodMaxim: null,
      };

      const maxim = MAXIMS[0];

      const state = reducer(initialState, setFoodMaxim(maxim));

      expect(state.foodMaxim).toEqual(maxim);
    });
  });

  describe('setFoodMaxims', () => {
    it('changes status called "foodMaxims"', () => {
      const initialState = {
        foodMaxims: [],
      };

      const state = reducer(initialState, setFoodMaxims(MAXIMS));

      expect(state.foodMaxims).toHaveLength(MAXIMS.length);
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

  describe('setCheckedCategory', () => {
    it('add a new checked category at "checkCategory"', () => {
      const initialState = {
        checkedCategory: {},
      };

      const checkedCategory = CATEGORIES[0];
      const state = reducer(initialState, setCheckedCategory(checkedCategory));

      expect(state.checkedCategory).toBe(checkedCategory);
    });
  });

  describe('clearCheckedCategory', () => {
    it('clear state named "checkCategory"', () => {
      const initialState = {
        checkedCategory: CATEGORIES[0],
      };

      const state = reducer(initialState, clearCheckedCategory());

      expect(state.checkedCategory.id).toBeUndefined();
      expect(state.checkedCategory.category).toBeUndefined();
    });
  });

  describe('changeMenuFields', () => {
    it('change menuName in menusFields', () => {
      const initialState = {
        menusFields: {
          menuName: '',
        },
      };

      const state = reducer(initialState, changeMenuFields(
        { name: 'menuName', value: '메뉴가 뭐가 있을까요?' },
      ));

      expect(state.menusFields.menuName).toBe('메뉴가 뭐가 있을까요?');
    });
  });
});
