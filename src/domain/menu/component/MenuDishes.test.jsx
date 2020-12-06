import React from 'react';

import { render } from '@testing-library/react';

import FOODS from '__fixtures__/foods';

import MenuDishes from './MenuDishes';

describe('MenuDishes', () => {
  function renderMenuDishes(menu) {
    return render((
      <MenuDishes menu={menu} />
    ));
  }

  context('with picked menu', () => {
    const menu = FOODS[0];

    it('renders menu', () => {
      const { container } = renderMenuDishes(menu);

      expect(container).toHaveTextContent(`${menu.name}`);
    });
  });

  context('without picked menu', () => {
    it('renders only', () => {
      renderMenuDishes();
    });
  });
});
