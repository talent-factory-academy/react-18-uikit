import { fireEvent, render, screen, within } from '@testing-library/react';
import React from 'react';
import button from './Button';
import Buttons from './Buttons';

const buttons = [
  {
    label: "Google",
    url: "http://www.google.com",
    style: {
      color: "white",
      backgroundColor: "red"
    }
  },
  {
    label: "Microsoft",
    url: "http://www.microsoft.com",
    style: {
      color: "white",
      backgroundColor: "white"
    }
  }
]

test('render buttons', () => {
  const { container } = render(
    <Buttons border direction="row" items={buttons} />
  );

  buttons.forEach(item => {
    within(container).getByText(item.label)
  })
});


test('render custom styles', () => {
  render(
    <Buttons border direction="row" items={buttons} />
  );

  // SOLUTION 1: manual check on first element
  expect(screen.getByText(buttons[0].label)
    .getAttribute('style')).toContain('color: white; background-color: red')

  // SOLUTION 2 (best): check all elements
  buttons.forEach(item => {
    const attr = expect(screen.getByText(item.label).getAttribute('style'))
    attr.toContain(`color: ${item.style.color}`)
    attr.toContain(`background-color: ${item.style.backgroundColor}`)
  })
});

