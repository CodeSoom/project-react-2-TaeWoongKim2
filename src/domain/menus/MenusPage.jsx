import React from 'react';

import styled from '@emotion/styled';

import MenusContainer from './container/MenusContainer';
import MenusFormContainer from './container/MenusFormContainer';
import CategoriesContainer from './container/CategoriesContainer';


const MenusSection = styled.section`
  height: 100%;
  padding: 0 1em;
  text-align: center;
  color: #333;
  & div {
    background-color: #fefefe;
    box-shadow: 2px 1px 5px #000000;
  }
  & ul {
    padding: 0;
    list-style: none;
  }
`;

const MenusTitle = styled.div`
  & h3 {
    margin: 0 0 0.2em;
    font-size: 36px;
    font-weight: bold;
    letter-spacing: .5em;
  }
  & .highlight {
    color: #e91e63;
    font-weight: 600;
  }
`;

export default function MenusPage() {
  return (
    <MenusSection>
      <MenusTitle>
        <h3>메뉴판</h3>
        <span className="highlight">먹고싶은 메뉴</span>
        를 확인해보세요!
      </MenusTitle>
      <CategoriesContainer />
      <MenusFormContainer />
      <MenusContainer />
    </MenusSection>
  );
}
