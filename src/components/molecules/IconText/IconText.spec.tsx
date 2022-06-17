import React from 'react';
import { render, screen } from '@testing-library/react';
import { IconText } from './index';

describe('Testing Icon Text Component', () => {
  it('should display the icon and the text correctly', () => {
    render(
      <IconText
        fontColor="primary"
        fontType="p1"
        fontWeight="bold"
        iconName="book"
        iconSize={24}
        text="name"
      />
    );

    const img = screen.getByRole('img');
    const name = screen.getByText('name');

    expect(img).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });

  it('only rerenders when (fontColor, fontWeight, className, text, textClassName, iconClassName) changes', () => {
    const { rerender } = render(
      <IconText
        fontColor="primary"
        fontType="p1"
        fontWeight="bold"
        iconName="book"
        iconSize={24}
        text="name"
      />
    );

    const text = screen.getByText('name');

    rerender(
      <IconText
        fontColor="primary"
        fontType="p1"
        fontWeight="bold"
        iconName="book"
        iconSize={24}
        text="abc"
      />
    );

    expect(text).toHaveTextContent('abc');
  });
});
