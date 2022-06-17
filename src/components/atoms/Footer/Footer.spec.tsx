import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './index';

describe('Testing Footer Component', () => {
  it('should be able to show the footer element with "Foo" text', () => {
    render(<Footer>Foo</Footer>);

    const footer = screen.getByText(/Foo/i);

    expect(footer).toBeInTheDocument();
  });
});
