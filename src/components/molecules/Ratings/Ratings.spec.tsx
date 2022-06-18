import React from 'react';
import { render, screen } from '@testing-library/react';
import { Ratings } from './index';

describe('Testing Ratings Component', () => {
  it('should display the ratings correctly', () => {
    render(<Ratings title="title" rating={3} />);

    const img = screen.getAllByRole('img');
    const name = screen.getByText('title');

    expect(img.length).toBe(3);
    expect(name).toBeInTheDocument();
  });

  it('the maximum of stars is 5', () => {
    render(<Ratings title="title" rating={10} />);

    const img = screen.getAllByRole('img');

    expect(img.length).toBe(5);
  });

  it('the minimum of stars is 0', () => {
    render(<Ratings title="title" rating={-5} />);

    const img = screen.queryAllByRole('img');

    expect(img.length).toBe(0);
  });

  it('only rerenders when className props changes', () => {
    const { rerender } = render(<Ratings title="titulo" className="test" />);

    const text = screen.getByText('titulo');

    rerender(<Ratings title="rerender:" className="test2" />);

    expect(text).toHaveTextContent('rerender:');
  });
});
