import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Toggable } from './Togglable';

export default {
  title: 'Widgets/Toggable',
  component: Toggable,
  argTypes: {
    onIconClick: { action: 'onIconClick' }
  }
} as ComponentMeta<typeof Toggable>;

const Template: ComponentStory<typeof Toggable> = (args) => <Toggable {...args}/>;

export const BasicExample = Template.bind({});

BasicExample.args = {
  title: 'My Toggable Panel',
  children: 'content here...'
};


export const Opened = Template.bind({});

Opened.args = {
  title: 'My Toggable Panel',
  children: 'content here...'
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  title: 'My Toggable Panel',
  children: 'content here...',
  icon: '💩',
};
