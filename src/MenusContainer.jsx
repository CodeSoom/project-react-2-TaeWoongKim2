import React from 'react';

import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import Menus from './Menus';

import { get } from './utils';


const MenusWapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-auto-rows: 180px 180px;
`;

export default function MenusContainer() {
  const menus = useSelector(get('foods'));
  const checkedCategories = useSelector(get('checkedCategories'));

  return (
    <MenusWapper>
      <Menus
        menus={menus}
        checkedCategories={checkedCategories}
      />
    </MenusWapper>
  );
}
