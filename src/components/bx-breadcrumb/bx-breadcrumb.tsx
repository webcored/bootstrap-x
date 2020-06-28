import { Component, ComponentInterface, h, Prop, Method, Element, EventEmitter, Event } from '@stencil/core';
import { Breadcrumb } from './bx-breadcrumb.dto';

@Component({
  tag: 'bx-breadcrumb',
  styleUrl: 'bx-breadcrumb.css',
  shadow: false,
})
export class BxBreadcrumb implements ComponentInterface {
  @Element() private element: HTMLElement;

  @Prop() separator: string = '/';
  @Prop() breadcrumbs?: Breadcrumb[] | string;

  componentWillLoad() {
    this.breadcrumbs = this.parseBreadcrumbs;
  }

  private get parseBreadcrumbs(): Breadcrumb[] {
    return (typeof this.breadcrumbs === 'string')
      ? JSON.parse(this.breadcrumbs as string)
      : this.breadcrumbs;
  }

  private computedBreadcrumbs(): Breadcrumb[] {
    try {
      let breadcrumbs: Breadcrumb[] = this.parseBreadcrumbs;
      let hasActive: boolean = Boolean(breadcrumbs.find(breadcrumb => breadcrumb.active));

      let computedbreadcrumbs: Breadcrumb[] = breadcrumbs.map((breadcrumb, index) => {
        breadcrumb.link = breadcrumb.link || `#${breadcrumb.text}`; // if not link add hashtag for label
        breadcrumb.active = hasActive ? breadcrumb.active : (breadcrumbs.length === index + 1); // if not active last level is active
        return breadcrumb;
      });

      return computedbreadcrumbs;
    } catch (e) {
      console.error('Invalid format passed for breadcrumbs', e.stack);
    }
  }

  private generateBreadcrumb(breadcrumb: Breadcrumb) {
    let className: string = 'breadcrumb-item breadcrumb-item--custom';
    className = breadcrumb.active ? `${className} active` : className;

    return (
      <li class={className}  aria-current={ breadcrumb.active ? 'page' : null } data-separator={this.separator}>
        {
          breadcrumb.active
            ? <span>{breadcrumb.text}</span>
            : <a href={breadcrumb.link} onClick={this.onClick.bind(this, breadcrumb)}>
                {breadcrumb.text}
              </a>
        }
      </li>
    );
  }

  private onClick(breadcrumb: Breadcrumb) {
    this.makeActive(breadcrumb);
    this.clicked.emit(breadcrumb);
  }

  private makeActive(selected: Breadcrumb) {
    let updatedBreadcrumbs = this.computedBreadcrumbs().map(breadcrumb => {
      breadcrumb.active = (breadcrumb.text === selected.text);
      return breadcrumb;
    });
    this.breadcrumbs = updatedBreadcrumbs;
  }

  render() {
    return (
      <ol class="breadcrumb">
        {
          this.breadcrumbs
          ? this.computedBreadcrumbs().map(breadcrumb => {
              return this.generateBreadcrumb(breadcrumb)
            })
          : <slot></slot>
        }
      </ol>
    );
  }

  @Method()
  async add(breadcrumb: Breadcrumb) {
    let breadCrumbs = this.computedBreadcrumbs();
    breadCrumbs.push(breadcrumb);
    this.breadcrumbs = breadCrumbs;
  }

  @Method()
  async active(text: String): Promise<void> {
    let breadcrumbs: Breadcrumb = this.computedBreadcrumbs().find(breadcrumb => breadcrumb.text === text);
    this.makeActive(breadcrumbs);
  }


  @Method()
  async delete(text: String): Promise<void> {
    let breadcrumbs: Breadcrumb[] = this.computedBreadcrumbs().filter(breadcrumb => breadcrumb.text !== text);
    this.breadcrumbs = breadcrumbs;
  }

  @Method()
  async dispose(): Promise<void> {
    this.element.remove();
  }

  /**
   * A click event for breadcrumb items
   */
  @Event() clicked: EventEmitter<Breadcrumb>;
}
