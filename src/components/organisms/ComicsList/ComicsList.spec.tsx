import React from 'react';
import { render, screen } from '@testing-library/react';
import { ComicType } from 'services/characters/types';
import { ComicsList } from './index';

describe('Testing Comics List Component', () => {
  const mock: ComicType[] = [
    {
      id: 1,
      title: 'Titulo',
      description: 'description',
      dates: [{ type: 'date', date: '01/02/1990' }],
      digitalId: 2,
      issueNumber: 3,
      pageCount: 1,
      thumbnail: {
        path: 'https://creativecommons.org/images/deed/cc-logo',
        extension: 'jpg',
      },
    },
    {
      id: 2,
      title: 'Titulo',
      description: 'description',
      dates: [{ type: 'date', date: '01/02/1990' }],
      digitalId: 4,
      issueNumber: 3,
      pageCount: 1,
      thumbnail: {
        path: 'https://creativecommons.org/images/deed/cc-logo',
        extension: 'jpg',
      },
    },
  ];

  it('should display the Comics List correctly', () => {
    render(<ComicsList data={mock} textEmpty="Lista vazia." />);

    const images = screen.getAllByRole('img');
    const titles = screen.getAllByText('Titulo');
    const emptyString = screen.queryByText('Lista vazia.');

    expect(images.length).toBe(2);
    expect(titles.length).toBe(2);
    expect(emptyString).not.toBeInTheDocument();
  });

  it('should display the empty string (data.length === 0)', () => {
    render(<ComicsList data={[]} textEmpty="Lista vazia." />);

    const emptyString = screen.getByText('Lista vazia.');

    expect(emptyString).toBeInTheDocument();
  });

  it('should rerender only if any props changes', () => {
    const { rerender } = render(
      <ComicsList data={[]} textEmpty="Lista vazia." />
    );

    const emptyString = screen.getByText('Lista vazia.');

    expect(emptyString).toBeInTheDocument();

    rerender(<ComicsList data={mock} textEmpty="Lista vazia." />);

    expect(emptyString).not.toBeInTheDocument();
  });
});
