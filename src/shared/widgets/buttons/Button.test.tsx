import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Button from './Button';

test('render Child content', () => {
  render(<Button>LABEL</Button>);
  expect(screen.getByText('LABEL')).toBeInTheDocument();
});

test('support native event listeners', () => {
  const fn = jest.fn()
  render(<Button onClick={fn} onMouseOver={fn}>LABEL</Button>);
  fireEvent.click(screen.getByText('LABEL'));
  expect(fn).toHaveBeenCalled()
  fireEvent.mouseOver(screen.getByText('LABEL'));
  expect(fn).toHaveBeenCalled()
});

test('support native styles', () => {
  render(<Button style={{ fontSize: '4rem'}} >LABEL</Button>);
  expect(screen.getByText('LABEL')
    .getAttribute('style')).toContain("font-size: 4rem")
});
