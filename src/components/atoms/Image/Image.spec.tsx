import React from 'react';
import { render, screen } from '@testing-library/react';
import { Image } from './Image';

describe('Testing Image Component', () => {
  it('should be able to show the image of Captain America (height: 300px, width: 300px)', () => {
    render(
      <Image name="captain" height={300} width={300} alt="Captain America" />
    );

    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
  });
});
