import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Toggle } from './Toggle';

describe('Testing the Toggle Component', () => {
  it('should be able to show the toggle checked', () => {
    render(<Toggle checked onChecked={jest.fn()} />);

    const checkbox = screen.getByRole('checkbox', { checked: true });

    expect(checkbox).toBeInTheDocument();
  });

  it('should be able to show the toggle unchecked', () => {
    render(<Toggle checked={false} onChecked={jest.fn()} />);

    const checkbox = screen.getByRole('checkbox', { checked: false });

    expect(checkbox).toBeInTheDocument();
  });

  it('should be possible to do check/uncheck actions', () => {
    let checked = false;
    const fn = jest.fn(() => {
      checked = !checked;
    });

    const { rerender } = render(<Toggle checked={checked} onChecked={fn} />);

    const checkbox = screen.getByRole('checkbox', { checked: false });

    fireEvent.click(checkbox);

    rerender(<Toggle checked={checked} onChecked={fn} />);

    expect(checkbox).toHaveProperty('checked', true);
    expect(fn).toHaveBeenCalled();
  });
});
