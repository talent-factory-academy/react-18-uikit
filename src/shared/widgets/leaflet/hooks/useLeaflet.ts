import L from 'leaflet';
import React, { useEffect } from 'react';

const markerIcon = L.icon({
  iconUrl: '../assets/marker.png',
  iconSize:     [50, 50],
  iconAnchor:   [25, 50],
  popupAnchor:  [0, -50]
});

export function useLeaflet(
  host:   React.MutableRefObject<HTMLDivElement | null>,
  map:   React.MutableRefObject<L.Map | null>,
  marker:   React.MutableRefObject<L.Marker | null>,
  coords: [number, number],
  zoom: number,
  popupText: string
) {

  // init
  useEffect(() => {
    if (host.current && !map.current) {
      map.current = L.map(host.current).setView([1, 1], 5);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
        .addTo(map.current);

      marker.current = L.marker([1, 1], { icon: markerIcon})
        .addTo(map.current)
        .bindPopup('')
        .openPopup();
    }
  }, [map, marker, host])

  useEffect(() => {
    map.current?.setView(coords);
    marker.current?.setLatLng(coords);
    marker.current?.bindPopup(popupText)
  }, [map, marker, coords, popupText]);

  useEffect(() => {
    if (map.current) {
      map.current.setZoom(zoom)
    }
  }, [map, zoom]);
}
