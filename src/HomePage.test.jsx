import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import HomePage from './HomePage';

import FOODS from '../fixtures/foods';


const mockPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

jest.mock('react-redux');

describe('HomePage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      food: FOODS[0],
      foods: FOODS,
    }));
  });

  function renderApp() {
    return render(<HomePage />);
  }

  it('renders title and subtitle', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent(/오늘 뭐 먹지/);
  });

  it('renders "메뉴 뽑기" button ', () => {
    const { getByText } = renderApp();

    const button = getByText('메뉴 뽑기');

    expect(button).not.toBeNull();

    fireEvent.click(button);

    expect(mockPush).toBeCalledWith('/menu');
  });
});
