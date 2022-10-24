import { Component, h, Prop, Event, EventEmitter, State } from '@stencil/core';
import { IIconConfig } from '../../interfaces/pitchui.interfaces';

@Component({
  tag: 'p-modal-header',
  styleUrl: 'p-modal-header.scss',
  shadow: false
})
export class PModalHeader {

  @Prop() modalHeaderCloseText?: string;
  @Prop() modalHeaderText?: string;
  @Prop() modalHeaderHasClose? = true;

  @State() closeIcon: IIconConfig = {
    iconName: 'times',
    iconType: 'fal'
  };

  @State() hasText = false;

  @Event() closeModal: EventEmitter;

  componentWillLoad() {
    if ((this.modalHeaderCloseText !== undefined || this.modalHeaderCloseText !== '')) {
      this.hasText = true;
    }
  }

  private onCloseHandler() {
    this.closeModal.emit(true);
  }

  render() {
    return (
      <div class="p-modal-header">
        <h4>{this.modalHeaderText}</h4>
        { this.modalHeaderHasClose ? <p-button text={this.modalHeaderCloseText} size='small' variant='naked' type='button' iconConfig={this.closeIcon} isIconOnly={!this.hasText} onButtonClicked={() => this.onCloseHandler()}></p-button> : '' }
      </div>
    );
  }
}
