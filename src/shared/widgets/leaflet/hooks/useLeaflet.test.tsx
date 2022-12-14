import {  renderHook } from '@testing-library/react';
import React  from 'react';
import { useLeaflet } from './useLeaflet';
// jest.mock('leaflet');

test('render Leaflet', () => {
  const hostRef: any = {
    current: null,
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

  const spySetZoom = jest.spyOn(mapRef.current, 'setZoom')
  const spySetView = jest.spyOn(mapRef.current, 'setView')
  const spySetLagLng = jest.spyOn(markerRef.current, 'setLatLng')
  const spyBindPopup = jest.spyOn(markerRef.current, 'bindPopup')

  renderHook(() => useLeaflet(hostRef, mapRef, markerRef, [42, 12], 5, 'hello'))

  expect(spySetZoom).toHaveBeenCalledWith(5);
  expect(spySetView).toHaveBeenCalledWith([42, 12]);
  expect(spySetLagLng).toHaveBeenCalledWith([42, 12]);
  expect(spyBindPopup).toHaveBeenCalledWith('hello');

  renderHook(() => useLeaflet(hostRef, mapRef, markerRef, [42, 12], 6, 'hello'))
  expect(mapRef.current.setView).toHaveBeenCalledWith([42, 12]);
  expect(mapRef.current.setZoom).toHaveBeenCalledWith(6);
})
