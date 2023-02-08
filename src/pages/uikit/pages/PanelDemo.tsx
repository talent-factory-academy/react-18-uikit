import Accordion from '../../../shared/widgets/accordion/Accordion';
import Button from '../../../shared/widgets/buttons/Button';
import Card from '../../../shared/widgets/card/Card';
import { CardBody } from '../../../shared/widgets/card/CardBody';
import { CardTitle } from '../../../shared/widgets/card/CardTitle';
import { Panel } from '../../../shared/widgets/panels/Panel';
import { Toggable } from '../../../shared/widgets/panels/Togglable';

const PanelsDemo = () => {
  return <div>

    <h1>Panel</h1>
    <Panel title="Simple Panel">lorem</Panel>

    <h1>Toggable</h1>

    <br/>
    <Toggable
      title="My Profile"
      icon="💩" onIconClick={() => console.log('icon clicked')}
    >
      <input type="text" placeholder="write something"/>
      <Button>CLICK ME</Button>
    </Toggable>

    <br/>
    <Toggable title="Another one" open>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid aut consequatur corporis eos itaque laborum magni minima natus nesciunt quam quos, recusandae reiciendis rem repudiandae sit, vel. Amet, sunt!
    </Toggable>

    <h1>Card (Compound)</h1>
    <Card>
      <CardTitle>Title</CardTitle>
      <CardBody>Body </CardBody>
    </Card>

    <Card>
      <Card.CardTitle>Title</Card.CardTitle>
      <Card.CardBody>Body </Card.CardBody>
    </Card>

    <div>
      <div className="cls1">
        <span>ciao pietrus</span>
      </div>
    </div>



    <h1>Accordion Compound / clone</h1>
    <Accordion>
      <Accordion.Group title="Group 1">content 1...</Accordion.Group>
      <Accordion.Group title="Group 2">content 2...</Accordion.Group>
      <Accordion.Group title="Group 3">content 3...</Accordion.Group>
    </Accordion>

    <h1>Accordion with Context</h1>

  </div>
};

export default PanelsDemo;

