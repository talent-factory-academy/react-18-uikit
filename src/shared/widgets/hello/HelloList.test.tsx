import React from 'react';
import { render, screen, within } from '@testing-library/react';
import HelloList, { initialState } from './HelloList';

test('display 3 items', async () => {
  render(<HelloList />);
  // OK
  const userList = screen.getAllByRole('list-item');
  expect(userList).toHaveLength(3);
});

test('display 3 items (solution 2)', async () => {
  render(<HelloList />);
  // get by test ID
  const userList = screen.getByTestId('list');

  // WORKS but not preferred way
  // ESLint: Avoid direct Node access. Prefer using the methods from Testing Library.(testing-library/no-node-access)
  expect(userList.children.length).toBe(3);
});

test('display 3 items (solution 3)', async () => {
  render(<HelloList />);

  initialState.forEach(item => {
    expect(screen.getByText(item)).toBeInTheDocument()
  })
});

test('display 3 items (solution 4)', async () => {
  render(<HelloList />);

  const userList = screen.getByTestId('list');

  initialState.forEach(item => {
    expect(within(userList).getByText(item)).toBeInTheDocument()
  })
});

