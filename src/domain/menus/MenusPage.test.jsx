import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import MenusPage from './MenusPage';


jest.mock('react-redux');

const mockPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

describe('MenusPage', () => {
  function renderFoodPage() {
    return render((
      <MemoryRouter>
        <MenusPage />
      </MemoryRouter>
    ));
  }

  it('renders title of "MenusPage"', () => {
    const { container } = renderFoodPage();

    expect(container).toHaveTextContent(/메뉴판/);
  });

  it('renders sub-title of "MenusPage"', () => {
    const { container } = renderFoodPage();

    expect(container).toHaveTextContent(/먹고싶은 메뉴를 확인해보세요/);
  });
});
