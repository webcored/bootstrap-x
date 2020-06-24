import { Component, ComponentInterface, h, Prop, Element, Host, Method, Event, EventEmitter } from '@stencil/core';
import { types } from './bootstrap-dto';

@Component({
  tag: 'bootstrap-alert',
  styleUrl: 'bootstrap-alert.css',
  shadow: false,
})
export class BootstrapAlert implements ComponentInterface {
  @Element() private element: HTMLElement;

  @Prop() type: types = types.primary;
  @Prop() message: string = ` A simple ${this.type} alert—check it out!`;
  @Prop() dismissible: boolean = false;


  dismissibleContent() {
    return (
      <button type="button" class="close" aria-label="Close" onClick={this.close.bind(this)}>
        <span aria-hidden="true">&times;</span>
      </button>
    );
  }

  render() {
    let alertClass: string =`alert alert-${this.type}`;

    // append dismissible classess
    alertClass = this.dismissible ? `${alertClass} alert-dismissible show fade` : alertClass;

    return (
      <Host class={alertClass} role="alert">
        {this.message}
        {this.dismissible ? this.dismissibleContent() : ''}
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
