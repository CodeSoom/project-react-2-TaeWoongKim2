import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', () => {
  function renderApp() {
    return render(<App />);
  }

  it('renders title and subtitle', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent(/오늘 뭐 먹지/);

    expect(container).toHaveTextContent(/무엇을 먹을지 고민이라면/);
    expect(container).toHaveTextContent(/오늘 한 끼 여기에 맡겨라/);
  });

  it('renders "메뉴 뽑기" button ', () => {
    const { getByText } = renderApp();

    const button = getByText('메뉴 뽑기');

    expect(button).not.toBeNull();

    fireEvent.click(button);
  });
});
