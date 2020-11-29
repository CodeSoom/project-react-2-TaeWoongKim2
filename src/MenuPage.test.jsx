import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import MenuPage from './MenuPage';

import FOODS from '../fixtures/foods';


const mockPush = jest.fn();

jest.mock('react-redux');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

describe('MenuPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      food: FOODS[0],
      foods: FOODS,
    }));
  });

  function renderFoodPage() {
    return render((
      <MemoryRouter>
        <MenuPage />
      </MemoryRouter>
    ));
  }

  it('renders food name and description', () => {
    const { container } = renderFoodPage();

    expect(container).toHaveTextContent(FOODS[0].name);

    expect(container).toHaveTextContent(`${FOODS[0].name} 어때?`);
  });
});
