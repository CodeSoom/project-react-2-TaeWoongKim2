import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  it('renders header', () => {
    const { container } = renderApp({ path: '/' });

    expect(container).toHaveTextContent(/오늘 뭐 먹지/);
  });
});
