import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Panel } from './Panel';

export default {
  title: 'Widgets/Panels',
  component: Panel,
} as ComponentMeta<typeof Panel>;

const Template: ComponentStory<typeof Panel> = (args) => <Panel {...args}/>;

export const BasicExample = Template.bind({});

BasicExample.args = {
  title: 'My Panel',
  children: 'content here...'
};
