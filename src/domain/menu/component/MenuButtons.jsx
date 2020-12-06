import React from 'react';

import BasicButton from 'components/BasicButton';

import styled from '@emotion/styled';

const ButtonsArea = styled.div`
  grid-area: share;
  text-align: center;
`;
export default function MenuButtons({ onPickMenuClick }) {
  return (
    <ButtonsArea>
      <hr />
      <BasicButton
        innerText="다시 뽑기"
        onClick={onPickMenuClick}
      />
    </ButtonsArea>
  );
}
