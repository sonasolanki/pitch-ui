import { h } from '@stencil/core';
import { Doc } from './docs.mdx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'p-modal-header',
  args: {
    modalHeaderCloseText: 'close',
    modalHeaderText: 'Modal header text',
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

const Template = (args) => <p-modal-header {...args}></p-modal-header>;

export const Default = Template.bind({});
Default.storyName = 'Default';

window.addEventListener('closeModal', (e) => action('closeModal')(e.detail));
