import L from 'leaflet';
import React, { useEffect, useRef } from 'react';

const markerIcon = L.icon({
  iconUrl: '../assets/marker.png',
  iconSize:     [50, 50],
  iconAnchor:   [25, 50],
  popupAnchor:  [0, -50]
});

interface LeafletProps {
  zoom: number;
  coords: [number, number];
  popupText: string;
  height?: number;
}
export const Leaflet = (props: LeafletProps) => {
  const host = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const marker = useRef<L.Marker | null>(null);

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
  }, [])

  useEffect(() => {
    map.current?.setView(props.coords);
    marker.current?.setLatLng(props.coords);
  }, [props.coords]);

  useEffect(() => {
    marker.current?.bindPopup(props.popupText)
  }, [props.popupText]);

  useEffect(() => {
    if (map.current) {
      map.current.setZoom(props.zoom)
    }
  }, [props.zoom]);

  return <div ref={host} style={{ width: '100%', height: props.height || 300}} />
};
