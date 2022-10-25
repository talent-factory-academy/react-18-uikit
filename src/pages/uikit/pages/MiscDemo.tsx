import React, { lazy, Suspense, useState } from 'react';
import { Spinner } from '../../../shared/utils/Spinner';
import Button from '../../../shared/widgets/buttons/Button';
import { ButtonGroup } from '../../../shared/widgets/buttons/ButtonGroup';
import HelloMockAxios from '../../../shared/widgets/hello-mocks/HelloMockAxios';
import HelloMockModules from '../../../shared/widgets/hello-mocks/HelloMockModules';
import ToolTip from '../../../shared/widgets/tooltip/Tooltip';
import Weather from '../../../shared/widgets/weather/WeatherMap';
const Hello = lazy(() => import('../../../shared/widgets/hello/Hello'));


 const MiscDemo = () => {
   const [city, setCity] = useState<string>('Milano')

  return (
    <div>
      <h1>Misc Components</h1>


      <h2>Spinner</h2>
      <Spinner />
      <Spinner color="primary"/>
      <Spinner color="secondary"/>
      <Spinner color="alert"/>


      <h1>ToolTip</h1>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 20}}>
        <div>

          <ToolTip text="Hello Tooltip">HOVER ME #1</ToolTip>
          <br/>
          <ToolTip text="Hello Tooltip">
            <Button>HOVER ME #2</Button>
          </ToolTip>

        </div>
        <div style={{position: 'relative', border: '2px dashed black', width: 200, height: 200, overflowY: 'scroll'}}>
          Scrollable Area
          <br/><br/><br/><br/><br/><br/>
          <ToolTip text="ciao">HOVER ME</ToolTip>
          <br/><br/><br/><br/><br/><br/>
        </div>

      </div>


      <h2>Weather Component</h2>
      <Weather city={city} />
      <br/>
      <ButtonGroup>
        <Button onClick={() => setCity('Trieste')}>Trieste</Button>
        <Button onClick={() => setCity('Milano')}>Milano</Button>
        <Button onClick={() => setCity('New York')}>New York</Button>
      </ButtonGroup>


      <h2>Hello World Component</h2>
      <Suspense fallback={<Spinner />}>
        <Hello />
      </Suspense>


      <h2>Hello Mock Axios</h2>
      <HelloMockAxios />
      <hr/>

      <h2>Hello Mock Module</h2>
      <HelloMockModules />

    </div>
  )
};

export default MiscDemo;
