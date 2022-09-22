import axios from 'axios';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import HelloMockAxios from './HelloMockAxios';

// inspired: https://www.csrhymes.com/2022/03/09/mocking-axios-with-jest-and-typescript.html
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

beforeEach(() => {
  jest.resetAllMocks();
  mockedAxios.get.mockResolvedValue({
    data: [
      {
        id: 1,
        name: 'Joe Doe'
      },
      {
        id: 2,
        name: 'Jane Doe'
      }
    ]
  });
});


test('render text', async () => {
  render(<HelloMockAxios />);

  await waitFor(() => {
    const userList = screen.getAllByRole('listitem');
    expect(userList).toHaveLength(2);
  })

});
