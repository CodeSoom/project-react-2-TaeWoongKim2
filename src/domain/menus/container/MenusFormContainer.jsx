import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { changeMenuFields } from 'slice';

import { get } from 'utils/common';

import styled from '@emotion/styled';

import MenusForm from '../component/MenusForm';


const MenusFormWapper = styled.div`
  margin: 1em auto;
  padding: 0 !important;
  background-color: #fff0 !important;
`;

export default function MenusFormContainer() {
  const dispatch = useDispatch();

  const { menuName } = useSelector(get('menusFields')) || { menuName: '' };

  function handleChange({ name, value }) {
    dispatch(changeMenuFields({ name, value }));
  }

  return (
    <MenusFormWapper>
      <MenusForm
        menuName={menuName}
        onChange={handleChange}
      />
    </MenusFormWapper>
  );
}
