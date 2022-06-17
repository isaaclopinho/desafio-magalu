import React from 'react';
import { render, screen } from '@testing-library/react';
import { ComicCard } from './index';

describe('Testing Comic Card Component', () => {
  it('should display the comic card correctly', () => {
    render(
      <ComicCard
        title="Hulk em ação"
        src="https://creativecommons.org/images/deed/cc-logo.jpg"
      />
    );

    const img = screen.getByRole('img');
    const description = screen.getByText('Hulk em ação');

    expect(img).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('should rerender only if src or title props changes', () => {
    const { rerender } = render(
      <ComicCard
        title="Hulk em ação"
        src="https://creativecommons.org/images/deed/cc-logo.jpg"
      />
    );

    const description = screen.getByText('Hulk em ação');
    expect(description).toBeInTheDocument();

    rerender(
      <ComicCard
        title="Captain America"
        src="https://creativecommons.org/images/deed/cc-logo.jpg"
      />
    );

    expect(description).toHaveTextContent('Captain America');
  });
});
