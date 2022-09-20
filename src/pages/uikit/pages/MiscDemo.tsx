import { useState } from 'react';
import Button from '../../../shared/widgets/buttons/Button';
import { ButtonGroup } from '../../../shared/widgets/buttons/ButtonGroup';
import Weather from '../../../shared/widgets/weather/WeatherMap';

 const MiscDemo = () => {
   const [city, setCity] = useState<string>('Milano')

  return (
    <div>
      <h1>Misc Demo</h1>

      <h2>Weather Component</h2>
      <Weather city={city} />
      <br/>
      <ButtonGroup>
        <Button onClick={() => setCity('Trieste')}>Trieste</Button>
        <Button onClick={() => setCity('Milano')}>Milano</Button>
        <Button onClick={() => setCity('New York')}>New York</Button>
      </ButtonGroup>

    </div>
  )
};

export default MiscDemo;
