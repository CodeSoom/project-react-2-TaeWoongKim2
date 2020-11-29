import React from 'react';

import { isEmpty } from './utils';

export default function Categories({
  categories = [],
  checkedCategories = [],
  onClick,
}) {
  return (
    <ul>
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
    </ul>
  );
}
