import React, { lazy, Suspense, useState } from 'react';
import { Spinner } from '../../../shared/utils/Spinner';
import Button from '../../../shared/widgets/buttons/Button';
import { ButtonGroup } from '../../../shared/widgets/buttons/ButtonGroup';
import Weather from '../../../shared/widgets/weather/WeatherMap';
const Hello = lazy(() => import('../../../shared/widgets/hello/Hello'));


 const MiscDemo = () => {
   const [city, setCity] = useState<string>('Milano')

  return (
    <div>
      <h1>Misc Demo</h1>

      <h2>Hello World Component</h2>
      <Suspense fallback={<Spinner />}>
        <Hello />
      </Suspense>


      <hr/>

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
