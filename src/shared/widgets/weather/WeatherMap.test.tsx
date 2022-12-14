import { rest } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Weather, { iconExt, iconURL } from './WeatherMap';

/**
 * Example to see how to mock an HTTP request with Mock Service Worker
 */
const mock = {
  main: { temp: 10 },
  weather: [
    { icon: '00' }
  ]
}
const server = setupServer(
  rest.get('*openweathermap*', (req, res, ctx) => {
    return res(ctx.json(mock))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('render city', async () => {
  render(<Weather city="Roma" />);
  await waitFor(() => expect(screen.getByText('Roma')))
  expect(screen.getByText('Roma')).toHaveTextContent('Roma');
});

test('render temperature', async () => {
  render(<Weather city="Roma" />);
  await waitFor(() => expect(screen.getByText(mock.main.temp +'°')))
});

test('render icon', async () => {
  render(<Weather city="Roma" />);
  await waitFor(() => expect(screen.getByText(mock.main.temp +'°')))
  expect(screen.getByAltText('weather icon'))
    .toHaveAttribute('src', `${iconURL}/${mock.weather[0].icon}.${iconExt}`)
});
