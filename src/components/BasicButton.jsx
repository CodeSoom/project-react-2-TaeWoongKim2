import React from 'react';

import styled from '@emotion/styled';

const Button = styled.button`
  color: #eee;
  font-size: 18px;
  height: 48px;
  width: 180px;
  line-height: 48px;
  margin: 25px 25px;
  text-align: center;
  border: 1px solid #eee;
  transition: all 0.3s ease 0s;
  background: #fff0;
  margin: 1em 0 0;
  &:hover {
    background: #6b8754;
    cursor: pointer;
  };
`;

export default function BasicButton({ innerText, onClick }) {
  return <Button type="button" onClick={onClick}>{innerText}</Button>;
}
