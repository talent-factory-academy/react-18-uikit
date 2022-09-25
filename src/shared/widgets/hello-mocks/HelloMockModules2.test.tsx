import { AxiosResponse } from 'axios';
import React from 'react';
import { render, screen, waitFor, within } from '@testing-library/react';
import HelloMockModules from './HelloMockModules';

jest.mock('./utils', () => ({
  loadConfig: { language: 'xx', theme: 'abc'},
  loadUsersAxios: () => Promise.resolve({
    data: [
      { id: 1, name: 'A'},
      { id: 2, name: 'B'}
    ]
  } as AxiosResponse),
  loadPostsFetch: () => Promise.resolve([
    { id: 1, title: 'A'},
    { id: 2, title: 'B'}
  ])
}))


//  mock method from es module
test('render language and theme 2', async () => {
  render(<HelloMockModules />);

  await waitFor(() => {
    expect(screen.getByText('Theme: abc')).toBeInTheDocument();
  })

  await waitFor(() => {
    expect(screen.getByText('Language: xx')).toBeInTheDocument();
  })
});

test('render users loaded by Axios 2', async () => {

  render(<HelloMockModules />);

  await waitFor(() => {
    const list = screen.getByTestId('users-list');
    const items = within(list).getAllByRole('listitem');
    expect(items).toHaveLength(2);
  })

});

test('render posts fetched by fetch 2', async () => {

  render(<HelloMockModules />);

  await waitFor(() => {
    const list = screen.getByTestId('posts-list');
    const items = within(list).getAllByRole('listitem');
    expect(items).toHaveLength(2);
  })

});
