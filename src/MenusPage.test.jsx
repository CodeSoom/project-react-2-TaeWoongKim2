import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import MenusPage from './MenusPage';

import MENUS from '../fixtures/foods';


jest.mock('react-redux');

const mockPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

describe('MenusPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      foods: MENUS,
    }));
  });

  function renderFoodPage() {
    return render((
      <MemoryRouter>
        <MenusPage />
      </MemoryRouter>
    ));
  }

  it('renders title called "menu board"', () => {
    const { container } = renderFoodPage();

    expect(container).toHaveTextContent(/메뉴판/);
  });
});
