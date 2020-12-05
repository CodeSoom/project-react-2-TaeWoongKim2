import React from 'react';

import styled from '@emotion/styled';

import { isEmpty } from './utils';


const MenuList = styled.ul`
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-rows: auto auto;
  grid-auto-flow: column;
  grid-auto-columns: minmax(18%, auto);
  grid-gap: 1px;
  overflow-x: scroll;
`;

const MenuItem = styled.li(({ active }) => ({
  '& button': {
    width: '100%',
    height: '80px',
    lineHeight: '1em',
    fontSize: '1em',
    fontWeight: active ? 600 : 500,
    color: active ? '#fefefe' : '#333',
    border: 0,
    borderRadius: '4px',
    backgroundColor: active ? '#6b8754' : '#fefefe',
    cursor: 'pointer',
    '&:hover': {
      color: '#fefefe',
      fontWeight: 600,
      backgroundColor: '#6b8754',
    },
    '&:focus': {
      outline: 0,
    },
    '@media all and (max-width: 767px)': {
      height: '60px',
      fontSize: '.8em',
      lineHeight: '.8em',
    },
  },
}));

export default function Categories({
  categories = [],
  checkedCategory = {},
  onClick,
}) {
  return (
    <MenuList>
      <MenuItem
        active={isEmpty(Object.keys(checkedCategory))}
      >
        <button
          type="button"
          onClick={() => onClick()}
        >
          전체
        </button>
      </MenuItem>
      {categories.map(({ id, category }) => (
        <MenuItem
          key={id}
          active={checkedCategory && id === checkedCategory.id}
        >
          <button
            type="button"
            onClick={() => onClick({ id, category })}
          >
            {category}
          </button>
        </MenuItem>
      ))}
    </MenuList>
  );
}
