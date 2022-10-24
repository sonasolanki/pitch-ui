import { h } from '@stencil/core';
import { Doc } from './docs.mdx';

export default {
  title: 'p-modal-button-bar',
  args: {
    modalButtons: [
      { text: 'Button', variant: 'regressive', type: 'button', callback: () => console.log('cancel clicked') },
      { text: 'Button', variant: 'action', type: 'submit', callback: () => console.log('submit clicked') },
    ],
  },
  parameters: {
    docs: {
      page: Doc
    },
    status: {
      type: 'atomic'
    }
  }
};

const Template = (args) => <p-modal-button-bar {...args}></p-modal-button-bar>;

export const Default = Template.bind({});
Default.storyName = 'Default';
