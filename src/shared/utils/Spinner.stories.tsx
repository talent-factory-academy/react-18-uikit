import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Spinner } from './Spinner';

export default {
  title: 'Utils/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args}/>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  // color: 'alert'
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary'
};

export const Alert = Template.bind({});
Alert.args = {
  color: 'alert'
};
