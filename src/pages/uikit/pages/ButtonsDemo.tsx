import Button from '../../../shared/widgets/buttons/Button';
import { ButtonGroup } from '../../../shared/widgets/buttons/ButtonGroup';
import Buttons from '../../../shared/widgets/buttons/Buttons';
import { Separator } from '../../../shared/widgets/layout/Separator';

export const ButtonsDemo = () => {
  return <>
    <h2>Single Buttons</h2>

    <div className="flex flex-row gap-x-4 items-center">
      <Button onClick={() => console.log('click')}>BUTTON</Button>

      <Button
        onMouseOver={() => console.log('over')}
        style={{ fontSize: '40px'}} className="bg-red-400 text-white"
      >BUTTON</Button>
    </div>

    <Separator/>

    <h2>Button Groups</h2>
    <ButtonGroup border>
      <Button onClick={() => console.log('click 1')}>BUTTON 1</Button>
      <Button onClick={() => console.log('click 2')}>BUTTON 2</Button>
    </ButtonGroup>

    <Separator/>

    <ButtonGroup direction='col' border>
      <Button onClick={() => console.log('click')}>BUTTON 1</Button>
      <Button onClick={() => console.log('click')}>BUTTON 2 </Button>
    </ButtonGroup>

    <Separator/>

    <h2>Buttons with Configuration</h2>
    <Buttons border direction="row" items={[
      {
        label: "Google",
        url: "http://www.google.com",
        style: {
          color: "white",
          backgroundColor: "red"
        }

      },
      {
        label: "Microsoft",
        url: "http://www.microsoft.com",
        style: {
          color: "white",
          backgroundColor: "purple"
        }
      }
    ]} />
  </>
};
