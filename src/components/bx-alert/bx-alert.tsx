import { Component, ComponentInterface, h, Prop, Element, Host, Event, Method, EventEmitter } from '@stencil/core';
import { Variants } from '../../shared/bootstrap.dto';

@Component({
  tag: 'bx-alert',
  styleUrl: 'bx-alert.css',
  shadow: false
})
export class BxAlert implements ComponentInterface {
  @Element() private element: HTMLElement;

  @Prop() variant: Variants = Variants.primary;
  @Prop() text?: string;
  @Prop() dismissible: boolean = false;

  private dismissibleContent() {
    return (
      <button type="button" class="close" aria-label="Close" onClick={this.close.bind(this)}>
        <span aria-hidden="true">&times;</span>
      </button>
    );
  }

  render() {
    let alertClass: string =`alert alert-${this.variant}`;
    alertClass = this.dismissible ? `${alertClass} alert-dismissible show fade` : alertClass; // append dismissible classess

    return (
      <Host class={alertClass} role="alert">
        {this.text? this.text : <slot></slot>}

        {/* dismissible */}
        {this.dismissible ? this.dismissibleContent() : null}
      </Host>
    );
  }

  // methods
  @Method()
  async alert(): Promise<boolean> {
    return this.dismissible = true;
  }

  @Method()
  async close(): Promise<void> {
    this.closing.emit();
    this.element.classList.remove('show');

    window.setTimeout(() => {
      this.closed.emit();
      this.element.remove();
    }, 200);
  }

  @Method()
  async dispose(): Promise<void> {
    this.element.remove();
  }

  // events
  @Event() closing: EventEmitter<void>;
  @Event() closed: EventEmitter<void>;
}
