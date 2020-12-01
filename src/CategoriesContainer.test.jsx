import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import CATEGORIES from '../fixtures/categories';


const mockPush = jest.fn();

jest.mock('react-redux');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      categories: CATEGORIES,
      checkedCategory: [],
    }));
  });

  function renderCategoriesContainer() {
    return render((
      <MemoryRouter>
        <CategoriesContainer />
      </MemoryRouter>
    ));
  }

  it('renders CategoriesContainer', () => {
    renderCategoriesContainer();
  });
});
