import { fetchFoods } from './api';

import FOODS from '../../fixtures/foods';

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

    it('returns regions', async () => {
      const foodList = await fetchFoods();

      expect(foodList).toEqual(FOODS);
    });
  });
});
