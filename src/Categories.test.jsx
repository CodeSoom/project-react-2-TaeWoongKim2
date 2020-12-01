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

  function renderCategories({ categories = [], checkedCategory = {} } = []) {
    return render((
      <MemoryRouter>
        <Categories
          categories={categories}
          checkedCategory={checkedCategory}
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

  context('with checked category', () => {
    const checkedCategory = CATEGORIES[0];

    it('checks selectbox of selected category', () => {
      const { queryByText } = renderCategories({ categories: CATEGORIES, checkedCategory });

      expect(queryByText(`${checkedCategory.category}(V)`)).not.toBeNull();
    });
  });
});
