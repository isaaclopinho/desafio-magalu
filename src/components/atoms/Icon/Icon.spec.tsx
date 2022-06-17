import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Icon } from './index';

describe('Testing Icon Component', () => {
  it('should be able to show the book icon', () => {
    render(<Icon name="book" />);

    const icon = screen.getByTestId(/img/i);

    expect(icon).toBeInTheDocument();
  });

  it('should be possible to add click events in icon', () => {
    const fn = jest.fn(() => null);

    render(<Icon name="book" onClick={fn} disabled={false} />);

    const icon = screen.getByTestId('btn');

    fireEvent.click(icon);

    expect(fn).toHaveBeenCalled();
  });
});
