import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './index';

describe('Testing the Input Component', () => {
  it('should display the input of type default (with color primary)', () => {
    render(<Input type="default" value="a" setValue={jest.fn()} />);

    const input = screen.getByRole('textbox');

    expect(input.className).toMatch(/default/i);
  });

  it('should display the input of type white (with color green)', () => {
    render(<Input type="white" value="" setValue={jest.fn()} />);

    const input = screen.getByRole('textbox');

    expect(input.className).toMatch(/white/i);
  });

  it('should be able to change the input value', () => {
    let value = '';

    const fn = jest.fn((e) => {
      value = e.target.value;
    });

    const { rerender } = render(
      <Input type="white" value={value} setValue={fn} />
    );

    const input = screen.getByRole('textbox');

    userEvent.paste(input, 'hello');

    rerender(<Input type="white" value={value} setValue={fn} />);

    expect(value).toBe('hello');
    expect(input.getAttribute('value')).toBe('hello');
  });

  it('should be able to trigger an event whenever a user stops typing for 500ms', () => {
    jest.useFakeTimers();
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
    jest.spyOn(global, 'setTimeout');

    let value = '';

    const query = jest.fn(() => null);

    const fn = jest.fn((e) => {
      value = e.target.value;
    });

    render(
      <Input type="white" value={value} setValue={fn} setCurrentQuery={query} />
    );

    const input = screen.getByRole('textbox');
    userEvent.type(input, 'hello');

    expect(setTimeout).toHaveBeenCalled();
  });
});
