import React from 'react';

import styled from '@emotion/styled';

import { isEmpty } from './utils';


const MenuList = styled.ul`
  display: flex;
  & li {
    flex: 1;
    flex-basis: auto;
  }
`;

export default function Categories({
  categories = [],
  checkedCategories = [],
  onClick,
}) {
  return (
    <MenuList>
      <li>
        <button
          type="button"
          onClick={() => onClick()}
        >
          전체
          {isEmpty(checkedCategories) ? (
            '(V)'
          ) : null}
        </button>
      </li>
      {categories.map(({ id, category }) => (
        <li
          key={id}
        >
          <button
            type="button"
            onClick={() => onClick({ id, category })}
          >
            {category}
            {checkedCategories.find((checkedCategoriy) => (checkedCategoriy.id === id)) ? (
              '(V)'
            ) : null}
          </button>
        </li>
      ))}
    </MenuList>
  );
}
