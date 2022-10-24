import { h } from '@stencil/core';
import { Doc } from './docs.mdx';

export default {
  title: 'p-icon',
  args: {
    iconConfig: {
      iconName: 'bullhorn',
      iconType: 'fal'
    }
  },
  parameters: {
    docs: {
      page: Doc
    },
    status: {
      type: 'released',
    }
  }
};

const Template = (args) => <p-icon {...args}></p-icon>;

export const Default = Template.bind({});
Default.storyName = 'Default';
