import L from 'leaflet';
import React, { useRef } from 'react';
import { useLeaflet } from './hooks/useLeaflet';

interface LeafletTestableProps {
  zoom: number;
  coords: [number, number];
  popupText: string;
}
export const LeafletTestable = (props: LeafletTestableProps) => {
  const { coords, popupText, zoom } = props;
  const host = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null)
  const marker = useRef<L.Marker | null>(null)

  useLeaflet(host, map, marker, coords, zoom, popupText)
  console.log(host)
  return <div ref={host} style={{ width: '100%', height: 300}} />
};
