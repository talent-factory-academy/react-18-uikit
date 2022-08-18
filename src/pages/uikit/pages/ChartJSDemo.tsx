import { useState } from 'react';
import Button from '../../../shared/widgets/buttons/Button';
import { ButtonGroup } from '../../../shared/widgets/buttons/ButtonGroup';
import ChartJS from '../../../shared/widgets/chartjs/ChartJS';
import { Col } from '../../../shared/widgets/layout/Col';
import { Fx } from '../../../shared/widgets/layout/Fx';

 const ChartJSDemo = () => {
  const [skills, setSkills] = useState({
    labels: ['angular', 'react', 'js', 'svelte', 'solid'],
    data: [90, 80, 100, 50, 80]
  })

  return <div>
    <h1>ChartJS DEMO</h1>
    <Fx>
      <Col grow className="w-1/2">
        <ChartJS
          data={skills.data}
          labels={skills.labels}
        />
      </Col>
      <Col grow className="w-1/2">
        <ChartJS
          chartType="radar"
          data={skills.data}
          labels={skills.labels}
        />
      </Col>
    </Fx>


    <br/>
    <ButtonGroup border>
      <Button onClick={() => setSkills({
        labels: ['A', 'B', 'C', 'D', 'E'],
        data: [20, 10, 70, 40, 40]
      })}>Change Data 1 </Button>
      <Button onClick={() => setSkills({
        labels: ['A', 'B', 'C', 'D', 'E'],
        data: [50, 30, 10, 100, 50]
      })}>Change Data 2</Button>

    </ButtonGroup>


    <ChartJS
      chartType="radar"
      title="Temperatures"
      data={[11, 22, 32, 15, 25, 23, 32]}
      labels={['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']}
    />

  </div>
};

export default ChartJSDemo;
