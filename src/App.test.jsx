import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      food: null,
      foods: [],
      categories: [],
    }));
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  it('renders title of home page', () => {
    const { container } = renderApp({ path: '/' });

    expect(container).toHaveTextContent(/오늘 뭐 먹지/);
  });

  it('renders header of menu page', () => {
    const { container } = renderApp({ path: '/menu' });

    expect(container).toHaveTextContent(/오늘 뭐 먹지/);
  });

  it('renders title of menus page', () => {
    const { container } = renderApp({ path: '/menus' });

    expect(container).toHaveTextContent(/메뉴판/);
  });
});
