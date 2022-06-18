import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Home } from './index';

describe('Testing Home Page', () => {
  it('should be able to display the homepage correctly', async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const title = screen.getByText('EXPLORE O UNIVERSO');
    const subtitle = screen.getByText(
      'Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!'
    );
    const input = screen.getByRole('textbox');

    userEvent.type(input, 'a');

    const spinner = await waitFor(() => screen.getByTestId('spinner'));

    expect(spinner).toBeInTheDocument();

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input.className).toMatch(/default/i);
  });
});
