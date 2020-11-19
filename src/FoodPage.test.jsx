import React from 'react';

import { render } from '@testing-library/react';

import FoodPage from './FoodPage';

describe('FoodPage', () => {
  function renderFoodPage() {
    return render(<FoodPage />);
  }

  it('renders food name and description', () => {
    const { container } = renderFoodPage();

    expect(container).toHaveTextContent(/음식 이름/);

    expect(container).toHaveTextContent(/어때?/);
    expect(container).toHaveTextContent(/소개하는 글!/);
  });
});
