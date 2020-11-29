import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import Menus from './Menus';

import FOODS from '../fixtures/foods';
import CATEGORIES from '../fixtures/categories';

describe('Menus', () => {
  function renderFoodPage() {
    return render((
      <MemoryRouter>
        <Menus
          menus={FOODS}
          checkedCategories={CATEGORIES}
        />
      </MemoryRouter>
    ));
  }

  it('renders menu list', () => {
    const { container } = renderFoodPage();

    FOODS.forEach((food) => {
      expect(container).toHaveTextContent(food.name);
    });
  });
});
