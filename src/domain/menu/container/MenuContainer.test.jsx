import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import FOODS from '__fixtures__/foods';

import MenuContainer from './MenuContainer';


const mockPush = jest.fn();

jest.mock('react-redux');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

describe('MenuContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      food: FOODS[0],
      foods: FOODS,
    }));
  });

  function renderMenuContainer() {
    return render((
      <MemoryRouter>
        <MenuContainer />
      </MemoryRouter>
    ));
  }

  it('renders food name and description', () => {
    const { container } = renderMenuContainer();

    expect(container).toHaveTextContent(FOODS[0].name);

    expect(container).toHaveTextContent(`${FOODS[0].name}`);
  });
});
