import React from 'react';
import { render, screen } from '@testing-library/react';
import { Spinner } from './Spinner';

describe('Testing Spinner Component', () => {
  it('the spinner is rendered correctly', () => {
    render(<Spinner size="sm" />);

    const div = screen.getByTestId('spinner');

    expect(div).toBeInTheDocument();
    expect(div.childNodes.length).toBe(2);
  });

  it('should display a small size spinner', () => {
    render(<Spinner size="sm" />);

    const spinner = screen.getByTestId('spinner');

    expect(spinner.className).toMatch(/sm/i);
  });

  it('should display a medium size spinner', () => {
    render(<Spinner size="md" />);

    const spinner = screen.getByTestId('spinner');

    expect(spinner.className).toMatch(/md/i);
  });

  it('should display a big size spinner', () => {
    render(<Spinner size="lg" />);

    const spinner = screen.getByTestId('spinner');

    expect(spinner.className).toMatch(/lg/i);
  });
});
