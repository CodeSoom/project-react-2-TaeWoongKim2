
import FOODS from '__fixtures__/foods';
import CATEGORIES from '__fixtures__/categories';
import { fetchFoods, fetchCategories } from './api';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
    });
  };

  describe('fetchFoods', () => {
    beforeEach(() => {
      mockFetch(FOODS);
    });

    it('returns foods', async () => {
      const foodList = await fetchFoods();

      expect(foodList).toEqual(FOODS);
    });
  });

  describe('fetchCategories', () => {
    beforeEach(() => {
      mockFetch(CATEGORIES);
    });

    it('returns categories', async () => {
      const categories = await fetchCategories();

      expect(categories).toEqual(CATEGORIES);
    });
  });
});
