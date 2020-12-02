import React from 'react';

import { isEmpty } from './utils';

export default function Menus({
  menus = [],
  checkedCategory = {},
  searchedMenu = '',
}) {
  if (!menus || isEmpty(menus)) {
    return <p>등록된 메뉴가 없습니다!</p>;
  }

  const filteredMenus = (isEmpty(Object.keys(checkedCategory))
    ? [...menus]
    : menus.filter(({ category }) => category === checkedCategory.category))
    .filter(({ name }) => name.includes(searchedMenu));

  return (
    <>
      {isEmpty(filteredMenus)
        ? null
        : filteredMenus.map(({ id, name }) => (
          <span key={id}>
            {name}
          </span>
        ))}
    </>
  );
}
