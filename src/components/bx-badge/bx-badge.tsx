import { Component, ComponentInterface, h, Prop, Host } from '@stencil/core';
import { Variants } from '../../shared/bootstrap.dto';

@Component({
  tag: 'bx-badge',
  styleUrl: 'bx-badge.css',
  shadow: false,
})
export class BxBadge implements ComponentInterface {
  @Prop() variant: Variants = Variants.primary;
  @Prop() text?: string;
  @Prop() pill: boolean = false;

  @Prop() link?: string;
  @Prop() target?: string;

  render() {
    let badgeClass = `badge ${this.pill ? 'badge-pill' : ''} badge-${this.variant}`;
    let content= this.text ? this.text : <slot></slot>;

    return (
      this.link
      ? <a href={this.link} class={badgeClass} target={this.target}>
          {content}
        </a>
      : <Host class={badgeClass}>
          {content}
        </Host>
    );
  }
}
