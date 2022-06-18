import React from 'react';
import { render, screen } from '@testing-library/react';
import { Layout } from './index';

describe('Testing Layout Component', () => {
  it('should be able to display the layout correctly', () => {
    render(
      <Layout>
        <div />
      </Layout>
    );

    const footer = screen.getByRole('contentinfo');
    const main = screen.getByRole('main');

    expect(footer).toBeInTheDocument();
    expect(main).toBeInTheDocument();
  });

  it('should rerender if the layout children changes', () => {
    const { rerender } = render(
      <Layout>
        <h1>texto</h1>
      </Layout>
    );

    const heading = screen.getByRole('heading');

    rerender(
      <Layout>
        <div />
      </Layout>
    );

    expect(heading).not.toBeInTheDocument();
  });
});
