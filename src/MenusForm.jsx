import React from 'react';

import styled from '@emotion/styled';


const MenuNameLabel = styled.label`
  display: none;
`;
const MenuNameInput = styled.input`
  width: -webkit-fill-available;
  height: 28px;
  border: 0;
  border-radius: 4px;
  padding: .2em 5em .2em 1em;
`;

export default function MenusForm({
  menuName,
  onChange,
}) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <MenuNameLabel htmlFor="search-menu">검색</MenuNameLabel>
      <MenuNameInput
        type="text"
        id="search-menu"
        name="menuName"
        value={menuName}
        placeholder="메뉴명"
        autoComplete="off"
        onChange={handleChange}
      />
    </>
  );
}
