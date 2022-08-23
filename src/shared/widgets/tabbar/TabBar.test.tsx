import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { TabBar } from './TabBar';

interface MockUser {
  id: number, name: string;
}
const items = [
  { id: 1, name: 'Fab' },
  { id: 2, name: 'Lorenzo' },
]
const fn = jest.fn()


test('should render items', () => {
  const { container } = render(
    <TabBar<MockUser>
      items={items}
      selectedItem={items[0]}
      onTabClick={fn}
    />);

  items.forEach(item => {
    within(container).getByText(item.name)
  })
});

test('should apply data-active to the selected item', () => {
  render(
    <TabBar<MockUser>
      items={items}
      selectedItem={items[0]}
      onTabClick={fn}
    />);

  expect(screen.getByText('Fab')).toHaveAttribute('data-active', 'true');
});

test('should invoke a callback when an item is clicked passing item and index', () => {
   render(
    <TabBar<MockUser>
      items={items}
      selectedItem={items[0]}
      onTabClick={fn}
    />);

  fireEvent.click(screen.getByText(items[0].name)); // Fab
  expect(fn).toHaveBeenCalledWith(items[0], 0)      // { id: 1, name: 'Fab'}, 0
});
