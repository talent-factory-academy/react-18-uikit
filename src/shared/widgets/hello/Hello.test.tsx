import userEvent from '@testing-library/user-event';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Hello from './Hello';

test.only('change name3', async () => {
  // ARRANGE
   render(<Hello />);
  // ACT
  userEvent.click(screen.getByText('Change Name'))

  // GET
  screen.getByText('Hello Fabio') // throw error if not found

  // FIND (needs AWAIT
  await screen.findByText('Hello Fabio') // throw error if not found

  // QUERY
  const val = screen.queryByText('Hello Fabio') // return null if not find
  // console.log(val) //  null or object

});

