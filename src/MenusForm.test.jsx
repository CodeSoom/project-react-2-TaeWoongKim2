import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import MenusForm from './MenusForm';

describe('MenusForm', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  function renderMenusForm() {
    return render((
      <MenusForm
        onChange={handleChange}
        onClick={handleClick}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders input label and placeholder to search menu name', () => {
    const { getByLabelText, getByPlaceholderText } = renderMenusForm();

    const input = getByLabelText('검색');

    expect(input).not.toBeNull();
    expect(getByPlaceholderText('메뉴명')).not.toBeNull();

    fireEvent.change(input, { target: { value: '백반' } });

    expect(handleChange).toBeCalledWith({ name: 'menuName', value: '백반' });
  });

  it('renders button and search menu name', () => {
    const { getByRole } = renderMenusForm();

    const imageIconButton = getByRole('img');
    expect(imageIconButton).not.toBeNull();

    fireEvent.click(imageIconButton);

    expect(handleClick).toBeCalled();
  });
});
