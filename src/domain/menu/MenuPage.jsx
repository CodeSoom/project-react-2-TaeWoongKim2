import React from 'react';

import styled from '@emotion/styled';

import MenuContainer from './container/MenuContainer';


const MenuSection = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function MenuPage() {
  return (
    <MenuSection>
      <MenuContainer />
    </MenuSection>
  );
}
