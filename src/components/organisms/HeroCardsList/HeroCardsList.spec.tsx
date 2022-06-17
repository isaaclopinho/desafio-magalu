import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { CharacterType } from 'services/characters/types';
import { HeroCardsList } from './index';

describe('Testing Hero Cards List Component', () => {
  const mock: CharacterType[] = [
    {
      id: 1,
      name: 'hero name',
      description: 'description',
      thumbnail: {
        path: 'https://creativecommons.org/images/deed/cc-logo',
        extension: 'jpg',
      },
    },
    {
      id: 2,
      name: 'hero name',
      description: 'description',
      thumbnail: {
        path: 'https://creativecommons.org/images/deed/cc-logo',
        extension: 'jpg',
      },
    },
  ];

  it('should be able to display the favorites heros', () => {
    render(
      <HeroCardsList
        data={mock}
        disabled={false}
        favoriteArray={[
          {
            id: 1,
            name: 'hero name',
            description: 'description',
            thumbnail: {
              path: 'https://creativecommons.org/images/deed/cc-logo',
              extension: 'jpg',
            },
          },
        ]}
      />
    );

    const images = screen.getAllByTestId('img');

    expect(images[0].getAttribute('src')).toMatch(/ic_coracao.svg/i);
    expect(images[1].getAttribute('src')).toMatch(/ic_coracao_vazio.svg/i);
  });

  it('should be able to favorite an hero from the list', () => {
    let favorites: CharacterType[] = [];
    const fn = jest.fn((c: CharacterType) => {
      if (!favorites.find((x) => c.id === x.id)) {
        favorites = [...favorites, c];
      } else {
        favorites = favorites.filter((x) => x.id !== c.id);
      }
    });

    const { rerender } = render(
      <HeroCardsList
        data={mock}
        disabled={false}
        favoriteArray={favorites}
        onFavorite={fn}
      />
    );

    const iconsBtn = screen.getAllByTestId('btn-icon');
    let icons = screen.getAllByTestId('img');

    fireEvent.click(iconsBtn[0]);

    rerender(
      <HeroCardsList
        data={mock}
        disabled={false}
        favoriteArray={favorites}
        onFavorite={fn}
      />
    );

    icons = screen.getAllByTestId('img');

    expect(icons[0].getAttribute('src')).toMatch(/ic_coracao.svg/i);
  });

  it('should be able to click in image and description', () => {
    const fn = jest.fn(() => null);

    render(<HeroCardsList data={mock} disabled={false} onClick={fn} />);

    const buttonsImages = screen.getAllByTestId('btn1');
    const buttonsDescriptions = screen.getAllByTestId('btn2');

    [...buttonsImages, ...buttonsDescriptions].forEach((btn) => {
      fireEvent.click(btn);
    });

    expect(fn).toHaveBeenCalledTimes(4);
  });

  it('should display the Hero Cards List correctly', () => {
    render(<HeroCardsList data={mock} disabled={false} />);

    const images = screen.getAllByRole('img');
    const titles = screen.getAllByText('hero name');

    expect(images.length).toBe(4);
    expect(titles.length).toBe(2);
  });

  it('should display the Captain America crying if (data.length === 0)', () => {
    render(<HeroCardsList data={[]} disabled={false} />);

    const images = screen.getAllByRole('img');

    expect(images.length).toBe(1);
  });

  it('should rerender only if any props changes', () => {
    const { rerender } = render(<HeroCardsList data={[]} disabled={false} />);

    let images = screen.getAllByRole('img');

    expect(images.length).toBe(1);

    rerender(<HeroCardsList data={mock} disabled={false} />);

    images = screen.getAllByRole('img');

    expect(images.length).toBe(4);
  });
});
