import { Component, h, Prop } from '@stencil/core';
import { IPButtonInterface } from '../p-button/p-button.interface';

@Component({
  tag: 'p-modal-button-bar',
  styleUrl: 'p-modal-button-bar.scss',
  shadow: false
})
export class PModalButtonBar {
  @Prop() modalButtons?: Array<IPButtonInterface> = [];

  private handleClick(callback: Function, e: CustomEvent) {
    if (callback !== undefined) {
      callback();
      e.preventDefault();
    }
  }

  render() {
    return (
      <div class="p-modal-button-bar">
      {this.modalButtons.map((button) => (
        <p-button
          text={button.text}
          variant={button.variant}
          type={button.type}
          uuid={button.uuid}
          disabled={button.disabled}
          onButtonClicked={(e) => this.handleClick(button.callback, e)}></p-button>
      ))}
      </div>
    );
  }
}
