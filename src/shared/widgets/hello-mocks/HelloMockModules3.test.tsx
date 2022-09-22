import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import HelloMockModules from './HelloMockModules';

jest.mock('./utils')

//  mock method from es module
test('render language and theme 3', async () => {
  render(<HelloMockModules />);

  await waitFor(() => {
    expect(screen.getByText('Theme: abc')).toBeInTheDocument();
  })

  await waitFor(() => {
    expect(screen.getByText('Language: xx')).toBeInTheDocument();
  })
});

test('render users loaded by Axios 3', async () => {

  render(<HelloMockModules />);

  await waitFor(() => {
    const userList = screen.getAllByRole('user-item');
    expect(userList).toHaveLength(2);
  })

});

test('render posts fetched by fetch 3', async () => {

  render(<HelloMockModules />);

  await waitFor(() => {
    const postList = screen.getAllByRole('post-item');
    expect(postList).toHaveLength(2);
  })

});
