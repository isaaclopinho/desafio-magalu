import React from 'react';
import { render, screen } from '@testing-library/react';
import { CounterSection } from './index';

describe('Testing Counter Section Component', () => {
  it('should display the Counter Section correctly', () => {
    render(<CounterSection amount={100} iconName="book" title="Quadrinhos" />);

    const img = screen.getByRole('img');
    const amount = screen.getByText('100');

    expect(img).toBeInTheDocument();
    expect(amount).toBeInTheDocument();
  });

  it('shouldnt rerender when any props changes', () => {
    const { rerender } = render(
      <CounterSection amount={10} title="Titulo" iconName="book" />
    );

    const amount = screen.getByText('10');
    expect(amount).toBeInTheDocument();

    rerender(
      <CounterSection amount={200} title="Titulo2" iconName="favoriteOf" />
    );

    expect(amount).not.toHaveTextContent('200');
  });
});
