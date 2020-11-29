import React from 'react';

import { isEmpty } from './utils';

export default function Menus({ menus = [], checkedCategories = [] }) {
  if (!menus || isEmpty(menus)) {
    return <p>등록된 메뉴가 없습니다!</p>;
  }

  return (
    <>
      {menus.map(({ id, name, category }) => {
        if (isEmpty(checkedCategories)
          || checkedCategories.find((checkedCategory) => (checkedCategory.category === category))) {
          return (
            <span key={id}>
              {name}
            </span>
          );
        }
        return null;
      })}
    </>
  );
}
