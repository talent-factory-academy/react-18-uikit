import Button from '../../../shared/widgets/buttons/Button';
import { Panel } from '../../../shared/widgets/panels/Panel';
import { Toggable } from '../../../shared/widgets/panels/Togglable';

export const PanelDemo = () => {
  return <div>

    <h1>Panel and Toggable</h1>
    <Panel title="Simple Panel">lorem</Panel>

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

  </div>
};
