import { AxiosResponse } from 'axios';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import HelloMockModules from './HelloMockModules';

import * as utils from './utils';

// solution 1
beforeEach(() => {
  jest.resetAllMocks();
  const mock = jest.spyOn(utils, 'loadConfig');
  mock.mockReturnValue({ language: 'xx', theme: 'abc'});

  const mock2 = jest.spyOn(utils, 'loadUsersAxios');
  mock2.mockReturnValue(Promise.resolve({
    data: [
      { id: 1, name: 'A'},
      { id: 2, name: 'B'}
    ]
  } as AxiosResponse));
});

//  mock method from es module
test('render language and theme', async () => {
  render(<HelloMockModules />);

  await waitFor(() => {
    expect(screen.getByText('Theme: abc')).toBeInTheDocument();
  })

  await waitFor(() => {
    expect(screen.getByText('Language: xx')).toBeInTheDocument();
  })
});

// Mock axios return
// see HelloMockAxios for a better examples
test('render users loaded by Axios', async () => {

  render(<HelloMockModules />);

  await waitFor(() => {
    const userList = screen.getAllByRole('user-item');
    expect(userList).toHaveLength(2);
  })

});

// Mock axios return
// see HelloMockAxios for a better examples
test('render posts fetched by fetch', async () => {
  const mock = jest.spyOn(utils, 'loadPostsFetch');
  mock.mockReturnValue(Promise.resolve([
      { id: 1, title: 'A'},
      { id: 2, title: 'B'}
    ]
  ));

  render(<HelloMockModules />);

  await waitFor(() => {
    const postList = screen.getAllByRole('post-item');
    expect(postList).toHaveLength(2);
  })

});
