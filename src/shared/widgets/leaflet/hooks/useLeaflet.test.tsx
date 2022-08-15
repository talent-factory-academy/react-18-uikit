import { act, render, renderHook, screen } from '@testing-library/react';
import { wait } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { useLeaflet } from './useLeaflet';

test('render Leaflet', () => {

  const hostRef: any = {
    current:  jest.fn().mockReturnThis()
  }
  const mapRef: any = {
    current:  {
      setView: jest.fn(),
      setZoom: jest.fn(),
    }
  }
  const markerRef: any = {
    current:  {
      setView: jest.fn(),
      setLatLng: jest.fn(),
      bindPopup: jest.fn(),
    }
  }
  jest.spyOn(mapRef.current, 'setZoom')
  jest.spyOn(mapRef.current, 'setView')
  jest.spyOn(markerRef.current, 'setLatLng')

  renderHook(() => useLeaflet(hostRef, mapRef, markerRef, [42, 12], 5, 'hello'))

  expect(mapRef.current.setZoom).toHaveBeenCalledWith(5);
  expect(mapRef.current.setView).toHaveBeenCalledWith([42, 12]);
  expect(markerRef.current.setLatLng).toHaveBeenCalledWith([42, 12]);
  expect(markerRef.current.bindPopup).toHaveBeenCalledWith('hello');


  renderHook(() => useLeaflet(hostRef, mapRef, markerRef, [42, 12], 6, 'hello'))
  expect(mapRef.current.setView).toHaveBeenCalledWith([42, 12]);
  expect(mapRef.current.setZoom).toHaveBeenCalledWith(6);


})
