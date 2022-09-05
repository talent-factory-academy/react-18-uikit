import { render, screen } from '@testing-library/react';
import React from 'react';
import { Col } from './Col';


test('should render the content', () => {
  render(<Col>LABEL</Col>);
  expect(screen.getByText('LABEL')).toBeInTheDocument();
});


test('should apply a custom class', () => {
  render(<Col className="example">LABEL</Col>);
  expect(screen.getByText('LABEL').getAttribute('class'))
    .toContain("example")
});

test('should apply a custom style', () => {
  render(<Col style={{color: 'white'}}>LABEL</Col>);
  expect(screen.getByText('LABEL').getAttribute('style'))
    .toContain("color: white")
});

test('should apply the grow class', () => {
  render(<Col grow>LABEL</Col>);
  expect(screen.getByText('LABEL').getAttribute('class'))
    .toContain('grow')
});

