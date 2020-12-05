import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import FOODS from '__fixtures__/foods';

import MenusContainer from './MenusContainer';


const mockPush = jest.fn();

jest.mock('react-redux');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

describe('MenusContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      foods: FOODS,
      checkedCategory: {},
      menusFields: { menuName: '' },
    }));
  });

  it('renders menu list', () => {
    const { container } = render((
      <MemoryRouter>
        <MenusContainer />
      </MemoryRouter>
    ));

    FOODS.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });
});
