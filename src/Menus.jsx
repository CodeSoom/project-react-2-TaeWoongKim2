import React from 'react';

import { isEmpty } from './utils';

export default function Menus({ menus = [], checkedCategory = {} }) {
  if (!menus || isEmpty(menus)) {
    return <p>등록된 메뉴가 없습니다!</p>;
  }

  return (
    <>
      {menus.map(({ id, name, category }) => {
        if (isEmpty(Object.keys(checkedCategory))
          || category === checkedCategory.category) {
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
