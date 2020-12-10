import React from 'react';

import styled from '@emotion/styled';


const MenuPick = styled.div`
  grid-area: pick;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  & > h3 {
    margin: 0 0 10px;
    font-size: 2em;
    @media all and (max-width: 767px) {
      font-size: 1.2em;
    }
  }
  & > p {
    margin: 1em 0 0 0;
    font-size: 1.2em;
    &:last-child {
      text-align: right;
    }
    @media all and (max-width: 767px) {
      font-size: 1em;
    }
  }
  & > hr {
    margin: 0;
    border: 0;
    border-top: 2px solid #eee;
    width: 90%;
  }
`;

export default function MenuPicker({ menu = {}, maxim = {} }) {
  const { name } = menu;
  const { content, author } = maxim;

  return (
    <MenuPick>
      <h3>
        {`🗳 ${name}`}
      </h3>
      <hr />
      <p>
        {content || '그저 랜덤 확률이지만, 기가막힌 선택이라고 생각해 👍🏻'}
      </p>
      <p>
        {author ? `- ${author} -` : '- Menu Picker -'}
      </p>
    </MenuPick>
  );
}
