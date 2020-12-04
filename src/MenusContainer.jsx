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
  @media all and (max-width: 767px) {
    grid-gap: .8rem;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-auto-rows: 120px 120px;
  }
`;

export default function MenusContainer() {
  const menus = useSelector(get('foods')) || [];
  const checkedCategory = useSelector(get('checkedCategory')) || {};
  const { menuName } = useSelector(get('menusFields')) || { menuName: '' };

  return (
    <MenusWapper>
      <Menus
        menus={menus}
        checkedCategory={checkedCategory}
        searchedMenu={menuName}
      />
    </MenusWapper>
  );
}
