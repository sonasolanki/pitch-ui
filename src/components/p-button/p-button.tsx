import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';
import { IIconConfig } from '../../interfaces/pitchui.interfaces';
import { getUUId } from '../../utils/utils';

@Component({
  tag: 'p-button',
  styleUrl: 'p-button.scss',
  shadow: false
})
export class PButton {
  /**
   * text for button
   *
   * @type {string}
   * @memberof PButton
   */
  @Prop() text: string;

  /**
   * disabled state of button
   *
   * @memberof PButton
   */
  @Prop() disabled = false;

  /**
   * variant of button
   *
   * @type {('action' | 'destructive' | 'ghost' | 'progressive' | 'regressive')}
   * @memberof PButton
   */
  @Prop() variant: 'action' | 'destructive' | 'ghost' | 'progressive' | 'regressive' | 'naked' = 'progressive';

  /**
   * type of button
   *
   * @type {('button' | 'reset' | 'submit')}
   * @memberof PButton
   */
  @Prop() type: 'button' | 'reset' | 'submit' = 'button';

  /**
   * size of button
   *
   * @type {('small' | 'medium' | 'large')}
   * @memberof PButton
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * config for icon on button
   *
   * @type {IIconConfig}
   * @memberof PButton
   */
  @Prop() iconConfig: IIconConfig;

  /**
   * is the button an icon only button
   *
   *
   * @memberof PButton
   */
  @Prop() isIconOnly = false;

  /**
   * does the button have a loader displayed
   *
   * @memberof PButton
   */
  @Prop() hasLoader = false;

  /**
   * uuid for button
   *
   * @type {string}
   * @memberof PButton
   */
  @Prop() uuid: string;

  @Event() buttonClicked: EventEmitter;

  componentWillLoad() {
    if (this.uuid === undefined) {
      this.uuid = getUUId();
    }
  }

  private handleButtonEvent(e: MouseEvent) {
    this.buttonClicked.emit(e);
  }

  render() {
    return (
      <button
        type={this.type}
        class={classNames('p-button', this.variant, this.size)}
        disabled={this.disabled}
        id={this.uuid}
        aria-disabled={this.disabled}
        title={this.text}
        onClick={(e) => this.handleButtonEvent(e)}
      >
        <span class={classNames({'screen-reader-text': this.isIconOnly})}>{this.text}</span>
        {this.iconConfig && (this.iconConfig.iconName !== undefined && this.iconConfig.iconType !== undefined) ? <p-icon class={classNames({'icon-only' : this.isIconOnly})} iconConfig={this.iconConfig}></p-icon> : ''}
        {this.hasLoader ? <f-loading size='small' inverted></f-loading> : ''}
      </button>
    );
  }
}
