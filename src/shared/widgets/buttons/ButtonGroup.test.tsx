import { render, within } from '@testing-library/react';
import React from 'react';
import Button from './Button';
import { ButtonGroup } from './ButtonGroup';

test('render children', () => {
  const labels = ['label1', 'label2']
  const { container } = render(<ButtonGroup>
    { labels.map(item => {
      return <Button key={item}>{item}</Button>
    })}
  </ButtonGroup>);

  labels.forEach(item => {
    within(container).getByText(item)
  })
});

