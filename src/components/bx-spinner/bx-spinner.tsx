import { Component, ComponentInterface, Host, h, Prop, Method, Element } from '@stencil/core';
import { Variants } from '../../shared/bootstrap.dto';

@Component({
  tag: 'bx-spinner',
  styleUrl: 'bx-spinner.css',
  shadow: false,
})
export class BxSpinner implements ComponentInterface  {
  @Element() element: HTMLElement;

  @Prop() variant: Variants = Variants.primary;
  @Prop() small: boolean = false;
  @Prop() grow: boolean = false;

  render() {
    let spinnerType = `spinner-${this.grow? 'grow' : 'border'}`;
    let spinnerSize = this.small ? `${spinnerType}-sm`: null;
    let spinnerClass = `${spinnerType} text-${this.variant} ${spinnerSize}`;

    return (
      <Host class={spinnerClass} role="status">
        <span class="sr-only">Loading...</span>
      </Host>
    );
  }

  @Method()
  async dispose(): Promise<void> {
    this.element.remove();
  }

}
