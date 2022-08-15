import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { TabBar } from './TabBar';

interface MockUser {
  id: number, name: string;
}
const items = [
  { id: 1, name: 'Fab' },
  { id: 2, name: 'Lorenzo' },
]
const fn = jest.fn()

xtest('render title bar', () => {
  render(<TabBar<MockUser> items={items} selectedItem={items[0]} onTabClick={fn} />);
  expect(screen.getByText('ciao')).toBeInTheDocument();
  fireEvent.click(screen.queryByText('💩') as HTMLElement);
  expect(fn).toHaveBeenCalled()
});
