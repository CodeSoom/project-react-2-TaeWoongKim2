import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import FoodListPage from './FoodListPage';

import FOODS from '../fixtures/foods';


const mockPush = jest.fn();

jest.mock('react-redux');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

describe('FoodListPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      foods: FOODS,
    }));
  });

  function renderFoodPage() {
    return render((
      <MemoryRouter>
        <FoodListPage />
      </MemoryRouter>
    ));
  }

  it('renders title called "menu board"', () => {
    const { container } = renderFoodPage();

    expect(container).toHaveTextContent(/메뉴판/);
  });

  it('renders menu list', () => {
    const { container } = renderFoodPage();

    FOODS.forEach((menu) => {
      expect(container).toHaveTextContent(menu.name);
    });
  });
});
