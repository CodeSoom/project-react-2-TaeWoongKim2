import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import MenusContainer from './MenusContainer';

import FOODS from '../fixtures/foods';


const mockPush = jest.fn();

jest.mock('react-redux');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

describe('MenusContainer', () => {
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
        <MenusContainer />
      </MemoryRouter>
    ));
  }

  it('renders menu list', () => {
    const { container } = renderFoodPage();

    FOODS.forEach((menu) => {
      expect(container).toHaveTextContent(menu.name);
    });
  });
});
