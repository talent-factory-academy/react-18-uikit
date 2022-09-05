import { render, screen, within } from '@testing-library/react';
import React from 'react';
import { Col } from './Col';
import { Fx } from './Fx';

test('render a flexbox', () => {
  render(<Fx />);

  expect(screen.getByTestId('fx').getAttribute('class'))
    .toContain("flex")
});

test('render justify', () => {
  render(<Fx justify="justify-between" />);

  expect(screen.getByTestId('fx').getAttribute('class'))
    .toContain("justify-between")
});

test('render valign', () => {
  render(<Fx valign="items-center" />);

  expect(screen.getByTestId('fx').getAttribute('class'))
    .toContain("items-center")
});

test('render gap', () => {
  render(<Fx gap={10} />);

  expect(screen.getByTestId('fx').getAttribute('style'))
    .toContain("gap: 10px")
});

test('render all <col/> components', () => {
  const labels = ['label1', 'label2']
  const { container } = render(
    <Fx>
      {
        labels.map(item => {
          return <Col key={item}>{item}</Col>
        })
      }
    </Fx>
  );

  labels.forEach(item => {
    within(container).getByText(item)
  })
});

