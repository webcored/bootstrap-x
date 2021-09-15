import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'bx-container',
  styleUrl: 'bx-container.css',
  shadow: true,
})
export class BxContainer implements ComponentInterface {

  render() {
    return (
      <Host class="container">
        <slot></slot>
      </Host>
    );
  }

}
