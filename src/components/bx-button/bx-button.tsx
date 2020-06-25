import { Component, ComponentInterface, Host, h, Prop, Method, Element } from '@stencil/core';
import { Variants, AdditionalVariants, ButtonSizes } from '../../shared/bootstrap.dto';

@Component({
  tag: 'bx-button',
  styleUrl: 'bx-button.css',
  shadow: false,
})
export class BxButton implements ComponentInterface {
  @Element() private element: HTMLElement;

  @Prop() text: string;

  @Prop() variant: AdditionalVariants | Variants = Variants.primary;
  @Prop() size: ButtonSizes;
  @Prop() outline: boolean = false;
  @Prop() block: boolean = false;

  @Prop() active: boolean = false;
  @Prop() disabled: boolean = false;

  @Prop() link?: string;
  @Prop() target?: string;


  render() {
    let buttonClass: string = `btn btn-${this.outline? 'outline-': ''}${this.variant}`;
    buttonClass = this.size ? `${buttonClass} btn-${ButtonSizes[this.size]}` : buttonClass;
    buttonClass = this.block ? `${buttonClass} btn-block` : buttonClass;
    buttonClass = this.active ? `${buttonClass} active` : buttonClass;
    buttonClass = this.disabled ? `${buttonClass} disabled` : buttonClass;

    let content =  this.text ? this.text : <slot></slot>;

    return (
      this.link
      ? <a
          href={this.link}
          target={this.target}
          class={buttonClass}
          role="button"
          tabindex={this.disabled ? '-1': undefined}
          aria-disabled={this.disabled ? 'true': undefined}
        >
          {content}
        </a>
      : <Host
          class={buttonClass}
          role="button"
          disabled={this.disabled}
          aria-disabled={this.disabled ? 'true': undefined}
        >
          {content}
        </Host>
    );
  }

  @Method()
  async toggle(): Promise<void> {
    this.active = true;
  }

  @Method()
  async dispose(): Promise<void> {
    this.element.remove();
  }
}
