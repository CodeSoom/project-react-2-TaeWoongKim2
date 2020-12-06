import React from 'react';

import styled from '@emotion/styled';


const MenuPick = styled.div`
  grid-area: pick;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  & > h3 {
    margin: 0 0 10px;
    font-size: 24px;
  }
  & > hr {
    margin: 0;
    border: 0;
    border-top: 2px solid #eee;
    width: 90%;
  }
  & > p {
    margin: 1em 0 0 0;
  }
`;

export default function MenuPicker({ menu = {} }) {
  const { name } = menu;

  return (
    <MenuPick>
      <h3>{name}</h3>
      <hr />
      <p>
        오늘
        {' '}
        {name}
        {' '}
        각 이다!
      </p>
    </MenuPick>
  );
}
