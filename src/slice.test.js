import reducer, {
  setFood,
  setFoods,
  setFoodMaxim,
  setFoodMaxims,
  setFoodPickerLoading,
  setMenuPicker,
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
      foodPickerLoading: false,
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
    it('changes state called "food"', () => {
      const initialState = {
        food: null,
      };

      const food = FOODS[0];

      const state = reducer(initialState, setFood(food));

      expect(state.food).toEqual(food);
    });
  });

  describe('setFoods', () => {
    it('changes state called "foods"', () => {
      const initialState = {
        foods: [],
      };

      const state = reducer(initialState, setFoods(FOODS));

      expect(state.foods).toHaveLength(FOODS.length);
    });
  });

  describe('setFoodMaxim', () => {
    it('changes state called "foodMaxim"', () => {
      const initialState = {
        foodMaxim: null,
      };

      const maxim = MAXIMS[0];

      const state = reducer(initialState, setFoodMaxim(maxim));

      expect(state.foodMaxim).toEqual(maxim);
    });
  });

  describe('setFoodMaxims', () => {
    it('changes state called "foodMaxims"', () => {
      const initialState = {
        foodMaxims: [],
      };

      const state = reducer(initialState, setFoodMaxims(MAXIMS));

      expect(state.foodMaxims).toHaveLength(MAXIMS.length);
    });
  });

  describe('setFoodPickerLoading', () => {
    it('changes state called "foodPickerLoading"', () => {
      const initialState = {
        foodPickerLoading: false,
      };

      const state = reducer(initialState, setFoodPickerLoading(true));

      expect(state.foodPickerLoading).toBeTruthy();
    });
  });

  describe('setMenuPicker', () => {
    it('changes state associated menu random picker', () => {
      const initialState = {
        food: null,
        foodMaxim: null,
        foodPickerLoading: false,
      };

      const tobeState = { food: FOODS[0], foodMaxim: MAXIMS[0] };
      const state = reducer(initialState, setMenuPicker(tobeState));

      expect(state.food).toBe(tobeState.food);
      expect(state.foodMaxim).toBe(tobeState.foodMaxim);
      expect(state.foodPickerLoading).toBeTruthy();
    });
  });

  describe('setCategories', () => {
    it('changes state called "categories"', () => {
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
