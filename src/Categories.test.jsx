import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import Categories from './Categories';

import CATEGORIES from '../fixtures/categories';


const mockPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

describe('Categories', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  function renderCategories({ categories = [], checkedCategories = [] } = []) {
    return render((
      <MemoryRouter>
        <Categories
          categories={categories}
          checkedCategories={checkedCategories}
          onClick={handleClick}
        />
      </MemoryRouter>
    ));
  }

  context('without categories', () => {
    it('renders button only "전체"', () => {
      const { container } = renderCategories();

      expect(container).toHaveTextContent('전체');
    });
  });

  context('with categories', () => {
    it('render buttons called "전체" and categories', () => {
      const { container } = renderCategories({ categories: CATEGORIES });

      expect(container).toHaveTextContent('전체');

      CATEGORIES.forEach(({ category }) => {
        expect(container).toHaveTextContent(category);
      });
    });
  });

  context('without checked category', () => {
    it('checks selectbox of "전체"', () => {
      const { getByText } = renderCategories();

      expect(getByText('전체(V)')).not.toBeNull();
    });
  });

  context('with one or more checked categories', () => {
    const newCheckedCategory = CATEGORIES[0];
    const checkedCategories = [newCheckedCategory];

    it('checks selectbox of selected categories', () => {
      const { queryByText } = renderCategories({ categories: CATEGORIES, checkedCategories });

      expect(queryByText('전체(V)')).toBeNull();
      expect(queryByText(`${newCheckedCategory.category}(V)`)).not.toBeNull();
    });
  });
});
