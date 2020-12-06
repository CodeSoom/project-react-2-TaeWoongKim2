import React from 'react';

import { render } from '@testing-library/react';

import FOODS from '__fixtures__/foods';

import MenuPicker from './MenuPicker';

describe('MenuPicker', () => {
  function renderMenuPicker(menu) {
    return render((
      <MenuPicker menu={menu} />
    ));
  }

  context('with picked menu', () => {
    const menu = FOODS[0];

    it('renders menu', () => {
      const { container } = renderMenuPicker(menu);

      expect(container).toHaveTextContent(`${menu.name}`);
    });
  });

  context('without picked menu', () => {
    it('renders only', () => {
      renderMenuPicker();
    });
  });
});
