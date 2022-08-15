import { CSSProperties, PropsWithChildren } from 'react';
import Button from './Button';
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';

export interface ButtonItem {
  label: string;
  "url": string
  "style": CSSProperties
}

export interface ButtonsProps {
  items: ButtonItem[];
}

const Buttons = (props: PropsWithChildren<ButtonsProps & ButtonGroupProps>) => {
  const {items, ...rest} = props;

  return <ButtonGroup {...rest}>
    {
      props.items.map(item => {
        return <Button key={item.label} {...item} />
      })
    }
  </ButtonGroup>
};

export default Buttons;
