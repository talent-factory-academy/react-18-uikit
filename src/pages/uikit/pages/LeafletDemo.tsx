import { useState } from 'react';
import Button from '../../../shared/widgets/buttons/Button';
import { ButtonGroup } from '../../../shared/widgets/buttons/ButtonGroup';
import { Leaflet } from '../../../shared/widgets/leaflet/Leaflet';
import { LeafletTestable } from '../../../shared/widgets/leaflet/LeafletTestable';

export const LeafletDemo = () => {
  const [coords, setCoords] = useState<[number, number]>([42, 12]);
  const [zoom, setZoom] = useState<number>(7);
  const [text, setText] = useState<string>('You are here!');

  return <div>
    MapDemo
    <Leaflet zoom={zoom} coords={coords} popupText={text} height={200} />
    <br/>
    <LeafletTestable zoom={zoom} coords={coords} popupText={text} />

    <br/>
    <ButtonGroup border>
      <Button onClick={() => setZoom(z => z - 1)}>-</Button>
      <Button onClick={() => setZoom(z => z + 1)}>+</Button>
      <Button onClick={() => setCoords([43, 13])}>Umbria</Button>
      <Button onClick={() => setCoords([46, 11])}>Trento</Button>
      <Button onClick={() => setText('text' + Math.random())}>Random Text</Button>
    </ButtonGroup>

  </div>
};
