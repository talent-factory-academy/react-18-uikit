import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';
import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'Widgets/ButtonGroup',
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) =>
  <ButtonGroup {...args}>
    <Button>one</Button>
    <Button>two</Button>
  </ButtonGroup>;

export const BasicExample = Template.bind({});
