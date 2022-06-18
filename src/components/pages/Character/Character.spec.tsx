import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Character } from './index';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Testing Character Page', () => {
  it('should be able to display the character page correctly', async () => {
    render(
      <BrowserRouter>
        <Character />
      </BrowserRouter>
    );

    const title = screen.getByText('Search heros');
    const description = screen.getByText('Personagem não possui descrição.');
    const input = screen.getByRole('textbox');
    const icons = screen.getAllByTestId('btn-icon');

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input.className).toMatch(/white/i);
    expect(icons.length).toBe(9);
  });

  it('should redirect to homepage when user types in input', async () => {
    render(
      <BrowserRouter>
        <Character />
      </BrowserRouter>
    );

    const input = screen.getByRole('textbox');
    userEvent.type(input, 'type');

    expect(mockedUsedNavigate).toBeCalled();
  });
});
