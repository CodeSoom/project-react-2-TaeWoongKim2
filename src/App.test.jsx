import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  function renderApp() {
    return render(<App />);
  }

  it('renders header', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent(/오늘 뭐 먹지/);
  });
});
