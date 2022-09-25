import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Widgets/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>;

export const BasicExample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicExample.args = {
  url: 'http://jsonplaceholder.typicode.com',
  children: 'my label'
};
export const LabelExample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LabelExample.args = {
  url: 'http://jsonplaceholder.typicode.com',
  label: 'another label'
};

export const WithClick = Template.bind({});
WithClick.args = {
  label: 'Click me',
};
