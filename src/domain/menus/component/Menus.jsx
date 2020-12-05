import React from 'react';

import styled from '@emotion/styled';

import { isEmpty } from 'utils/common';


const Menu = styled.div(({ image }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: image ? 'flex-end' : 'center',
  fontSize: '1.5em',
  fontWeight: image ? 600 : 500,
  color: image ? 'white' : '#333',
  backgroundImage: image ? `url(${image})` : 'none',
  backgroundPosition: image ? 'center' : 'unset',
  backgroundSize: image ? 'cover' : 'unset',
  '& > span': {
    padding: image ? '.2em .4em' : 'unset',
    backgroundColor: image ? '#0e0e0e78' : 'unset',
  },
  '@media all and (max-width: 767px)': {
    fontSize: '.8em',
  },
}));

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
        : filteredMenus.map(({ id, name, image }) => (
          <Menu
            key={id}
            image={image}
          >
            <span>{name}</span>
          </Menu>
        ))}
    </>
  );
}
