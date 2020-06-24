import { Component, ComponentInterface, h, Prop } from '@stencil/core';
import { types } from '../../shared/bootstrap.dto';

@Component({
  tag: 'bootstrap-badge',
  styleUrl: 'bootstrap-badge.css',
  shadow: false,
})
export class BootstrapBadge implements ComponentInterface {
  @Prop() type: types = types.primary;
  @Prop() content: string;
  @Prop() pill: boolean = false;
  @Prop() link?: string;
  @Prop() target: string = '_self';

  render() {
    let badgeClass = `badge ${this.pill ? 'badge-pill' : ''} badge-${this.type}`;
    let content= this.content ? this.content : <slot></slot>;
    return (
      this.link
      ? <a href={this.link} class={badgeClass} target={this.target}>
          {content}
        </a>
      : <span class={badgeClass}>
          {content}
        </span>
    );
  }
}
