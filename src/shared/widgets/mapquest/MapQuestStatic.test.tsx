import React from 'react';
import { render, screen } from '@testing-library/react';
import MapQuestStatic, { DEFAULT_HEIGHT, DEFAULT_WIDTH } from './MapQuestStatic';

test('renders city name', () => {
  const city = 'Trieste';
  render(<MapQuestStatic city={city} width={300} height={200}  API_KEY={'...'}/>);
  expect(screen.getByText(city)).toBeInTheDocument();
});

test('renders alt label', () => {
  const city = 'Trieste';
  render(<MapQuestStatic city={city} width={300} height={200} API_KEY={'...'}/>);
  screen.getByAltText(city)
});


test('apply width and height attributes', () => {
  const city = 'Trieste';
  render(<MapQuestStatic city={city}  width={140} height={120} API_KEY={'...'}/>);
  // test attribute - #1
  expect(screen.getByAltText(city)).toHaveAttribute('width', "140")
  // test attribute - #2
  expect(screen.getByAltText(city).getAttribute('height')).toEqual("120")
});

test('apply default width and height', () => {
  const city = 'Trieste';
  render(<MapQuestStatic city={city}  API_KEY={'...'}/>);
  // test attribute - #1
  expect(screen.getByAltText(city)).toHaveAttribute('width', DEFAULT_WIDTH.toString())
  // test attribute - #2
  expect(screen.getByAltText(city).getAttribute('height')).toEqual(DEFAULT_HEIGHT.toString())
});
