import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import MenusFormContainer from './MenusFormContainer';


jest.mock('react-redux');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: jest.fn() };
  },
}));

describe('MenusFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      menusFields: {
        name: '',
      },
    }));
  });

  function renderMenusFormContainer() {
    return render((
      <MemoryRouter>
        <MenusFormContainer />
      </MemoryRouter>
    ));
  }

  it('renders "MenusFormContainer"', () => {
    renderMenusFormContainer();
  });
});
