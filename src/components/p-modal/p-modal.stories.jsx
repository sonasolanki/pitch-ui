import { h } from '@stencil/core';
import { Doc } from './docs.mdx';

export default {
  title: 'p-modal',
  args: {
    hasClose: true,
    closeText: 'close',
    position: 'center',
    visible: true,
    size: 'custom',
    variant: 'dialog',
    headerText: 'Modal header text',
    buttons: [
      { text: 'Button', variant: 'regressive', type: 'button', callback: () => console.log('cancel clicked') },
      { text: 'Button', variant: 'action', type: 'submit', callback: () => console.log('submit clicked') },
    ],
  },
  argTypes: {
    variant: {
      options: [ 'dialog','drawer' ],
      control: { type: 'select' }
    },
    position: {
      options: [ 'center','left','right','bottom','top','top-right','top-left','bottom-left','bottom-right' ],
      control: { type: 'select' }
    },
    size: {
      options: [ 'small','medium','large','custom' ],
      control: { type: 'select' }
    }
  },
  parameters: {
    docs: {
      page: Doc
    },
    status: {
      type: 'new',
    }
  }
};

const Template = (args) => <p-modal {...args}>Modal content</p-modal>;
const AlertTemplate = (args) => (
  <p-modal {...args}>
    <p-alert slot="alert" in-container="true">This is alert content</p-alert>
    Modal content
  </p-modal>
);

export const Default = Template.bind({});
Default.storyName = 'Default';

export const ModalWithAlert = AlertTemplate.bind({});
ModalWithAlert.storyName = 'with Alert';
