import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { CardHero } from './index';

describe('Testing CardHero Component', () => {
  it('should display the cardhero correctly', () => {
    render(
      <CardHero
        name="Nome do Herói"
        isFavorite={false}
        onClick={jest.fn()}
        onFavorite={jest.fn()}
        src="https://creativecommons.org/images/deed/cc-logo.jpg"
      />
    );

    const img = screen.getByTestId('hero-img');
    const description = screen.getByText('Nome do Herói');
    const icon = screen.getByTestId('img');

    expect(img).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it('should be possible to favorite/unfavorite a hero', () => {
    let isFavorite = false;
    const fn = jest.fn(() => {
      isFavorite = !isFavorite;
    });

    const { rerender } = render(
      <CardHero
        name="Nome do Herói"
        isFavorite={isFavorite}
        onClick={jest.fn()}
        onFavorite={fn}
        src="https://creativecommons.org/images/deed/cc-logo.jpg"
      />
    );

    const heart = screen.getByTestId('img');

    fireEvent.click(heart);

    rerender(
      <CardHero
        name="Nome do Herói"
        isFavorite={isFavorite}
        onClick={jest.fn()}
        onFavorite={fn}
        src="https://creativecommons.org/images/deed/cc-logo.jpg"
      />
    );

    expect(heart.getAttribute('src')).toMatch(/ic_coracao.svg/i);
    expect(fn).toHaveBeenCalled();
  });

  it('also, should be able to click in the card image and description', () => {
    const fn = jest.fn(() => null);

    render(
      <CardHero
        name="Nome do Herói"
        isFavorite={false}
        onClick={fn}
        onFavorite={fn}
        src="https://creativecommons.org/images/deed/cc-logo.jpg"
      />
    );

    const btn1 = screen.getByTestId('btn1');
    const btn2 = screen.getByTestId('btn2');

    fireEvent.click(btn1);
    fireEvent.click(btn2);

    expect(fn).toHaveBeenCalledTimes(2);
  });
});
