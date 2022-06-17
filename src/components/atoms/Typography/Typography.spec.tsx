import React from 'react';
import { render, screen } from '@testing-library/react';
import { Typography } from './Typography';

describe('Testing Typography Component', () => {
  it('Heading typographies must have a heading text component', () => {
    render(<Typography type="h1" weight="bold" color="primary" />);

    const h1 = screen.getByRole('heading', { level: 1 });

    expect(h1).toBeInTheDocument();
  });

  it('Paragraph typographies must have a paragraph component', () => {
    render(
      <Typography type="p1" weight="bold" color="primary">
        marvel
      </Typography>
    );

    const p = screen.getByText('marvel');

    expect(p).toBeInTheDocument();
    expect(p.tagName).toBe('P');
  });
});
