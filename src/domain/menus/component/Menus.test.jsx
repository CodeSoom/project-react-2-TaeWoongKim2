import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import FOODS from '__fixtures__/foods';
import CATEGORIES from '__fixtures__/categories';

import Menus from './Menus';

describe('Menus', () => {
  function renderMenus(checkedCategory, searchedMenu) {
    return render((
      <MemoryRouter>
        <Menus
          menus={FOODS}
          checkedCategory={checkedCategory}
          searchedMenu={searchedMenu}
        />
      </MemoryRouter>
    ));
  }

  context('without checked category and searched menu name', () => {
    it('renders all menus', () => {
      const { container } = renderMenus();

      FOODS.forEach(({ name }) => {
        expect(container).toHaveTextContent(name);
      });
    });
  });

  context('with checked category', () => {
    const checkedCategory = CATEGORIES[0];

    it('renders menus by category', () => {
      const { container } = renderMenus(checkedCategory);

      const filteredMenus = FOODS.filter(({ category }) => category === checkedCategory.category);

      filteredMenus.forEach(({ name }) => {
        expect(container).toHaveTextContent(name);
      });
    });
  });

  context('with searched menu name', () => {
    const searchedMenu = FOODS[0].name;

    it('renders menus by menu name', () => {
      const { container } = renderMenus({}, searchedMenu);

      const filteredMenus = FOODS.filter(({ name }) => name.includes(searchedMenu));

      filteredMenus.forEach(({ name }) => {
        expect(container).toHaveTextContent(name);
      });
    });
  });

  context('with checked category and searched menu name', () => {
    const checkedCategory1 = CATEGORIES[0];
    const checkedCategory2 = CATEGORIES[2];
    const searchedMenu = FOODS[0].name;

    it('renders menus by menu name same category', () => {
      const { container } = renderMenus(checkedCategory1, searchedMenu);

      const filteredMenus = FOODS.filter(({ name }) => name.includes(searchedMenu));

      filteredMenus.forEach(({ name }) => {
        expect(container).toHaveTextContent(name);
      });
    });

    it('renders menus by menu name different category', () => {
      const { container } = renderMenus(checkedCategory2, searchedMenu);

      const filteredMenus = FOODS.filter(({ name }) => name.includes(searchedMenu));

      filteredMenus.forEach(({ name }) => {
        expect(container).not.toHaveTextContent(name);
      });
    });
  });
});
