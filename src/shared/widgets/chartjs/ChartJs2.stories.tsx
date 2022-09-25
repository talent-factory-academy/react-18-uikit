import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChartJS from './ChartJS';

export default {
  title: 'Widgets/ChartJs',
  component: ChartJS,
  argTypes: {
    labels: {
      description: 'an array of strings (x axis)',
      control: {
        type: 'array'
      }
    },
    data: {
      description: 'an array of numbers (y axis)',
      control: {
        type: 'array'
      }
    },
    chartType: {
      description: 'Set Line Chart (default) or Pie',
      defaultValue: 'pie',
      control: {
        type: 'select', options: ['line', 'radar'],
      }
    },
  }
} as ComponentMeta<typeof ChartJS>;

const Template: ComponentStory<typeof ChartJS> = (args) => <ChartJS {...args}/>;

export const BasicExample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicExample.args = {
  data:  [90, 80, 100, 50, 80],
  labels: ['angular', 'react', 'js', 'svelte', 'solid']
};

export const RadarExample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RadarExample.args = {
  chartType: 'radar',
  data:  [90, 80, 100, 50, 80],
  labels: ['angular', 'react', 'js', 'svelte', 'solid']
};
