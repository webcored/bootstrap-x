import {
  Component,
  ComponentInterface,
  Host,
  h,
  Prop,
  State,
  Method,
  Element,
  Event,
  EventEmitter,
  Listen,
} from "@stencil/core";
import { Sizes, Variants } from "../../shared/bootstrap.dto";
import {
  DropDirection,
  DropdownItem,
  DropType,
  Divider,
} from "./bx-dropdown.dto";

@Component({
  tag: "bx-dropdown",
  styleUrl: "bx-dropdown.css",
  shadow: false,
})
export class BxDropdown implements ComponentInterface {
  // states
  private readonly DELAY_TIME: number = 200;
  @Element() element: HTMLElement;
  @State() open: boolean = false;
  // props
  @Prop() variant: Variants = Variants.secondary;
  @Prop() textVariant: Variants = Variants.light;
  @Prop() size: Sizes;
  @Prop() split: boolean = false;
  @Prop() isLink: boolean = false;
  @Prop() buttonText: string = "Dropdown button";
  @Prop() direction: DropType = "down";
  @Prop() items?: (DropdownItem | Divider)[] | string;

  componentWillLoad() {
    this.items = this.dropDownItems;
  }

  //parse items pops
  private get dropDownItems(): DropdownItem[] {
    return typeof this.items === "string"
      ? JSON.parse(this.items as string)
      : this.items;
  }

  private get computedItems(): (DropdownItem | "divider")[] {
    if (typeof this.items === "object" && this.items.length) {
      return this.items;
    }
    return [];
  }
  private get buttonClass(): string {
    return `btn btn-${this.variant} btn-${this.size ?? "md"} text-${
      this.textVariant
    }`;
  }
  private dropButtonDownClass(isSplit: boolean = false) {
    return `dropdown-toggle ${isSplit ? "dropdown-toggle-split" : ""}`;
  }
  // renders button based on props
  private renderActionButton() {
    if (this.split) {
      let buttons = [
        <button type="button" class={this.buttonClass}>
          {this.buttonText}
        </button>,
        <button
          type="button"
          class={`${this.buttonClass} ${this.dropButtonDownClass(true)}`}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={this.toogleClass.bind(this)}
        >
          <span class="sr-only">{this.buttonText} Toggle Dropdown</span>
        </button>,
      ];
      return this.direction === "left" ? buttons.reverse() : buttons;
    } else {
      return (
        <button
          class={`${this.buttonClass} ${this.dropButtonDownClass()}`}
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={this.toogleClass.bind(this)}
        >
          {this.buttonText}
        </button>
      );
    }
  }

  // renders anchor button based on props
  private renderActionAchor() {
    if (this.split) {
      let buttons = [
        <a role="button" href="#" class={this.buttonClass}>
          {this.buttonText}
        </a>,
        <button
          type="button"
          class={`${this.buttonClass} ${this.dropButtonDownClass(true)}`}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={this.toogleClass.bind(this)}
        >
          <span class="sr-only">{this.buttonText} Toggle Dropdown</span>
        </button>,
      ];
      return this.direction === "left" ? buttons.reverse() : buttons;
    } else {
      return (
        <a
          class={`${this.buttonClass} ${this.dropButtonDownClass()}`}
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={this.toogleClass.bind(this)}
        >
          {this.buttonText}
        </a>
      );
    }
  }

  private generateDropItems() {
    return this.computedItems.map((item) => {
      if (item == "divider") {
        return <div class="dropdown-divider"></div>;
      } else {
        if (item.isHeader) {
          return <h6 class="dropdown-header">{item.text}</h6>;
        }
        let link = item.link ?? `#${item.text}`;
        return (
          <a
            class={`dropdown-item ${item.disabled ? "disabled" : ""} ${
              item.active ? "active" : ""
            }`}
            href={link}
          >
            {item.text}
          </a>
        );
      }
    });
  }
  private async toogleClass(): Promise<void> {
    if (this.open) {
      //dropdown is closing
      this.closing.emit();
    } else {
      //dropdown is opening
      this.opening.emit();
    }

    this.open = !this.open;

    window.setTimeout(() => {
      if (this.open) {
        this.opened.emit();
      } else {
        this.closed.emit();
      }
    }, this.DELAY_TIME);
  }

  render() {
    return (
      <Host
        class={`dropdown ${this.open ? "show" : ""} ${
          DropDirection[this.direction]
        } btn-group`}
      >
        {this.isLink ? this.renderActionAchor() : this.renderActionButton()}
        <div
          class={`dropdown-menu ${this.open ? "show" : ""}`}
          aria-labelledby="dropdownMenuButton"
        >
          {this.generateDropItems()}
          <slot></slot>
        </div>
      </Host>
    );
  }
  // close dropdown when other part of the dom is clicked
  @Listen("click", { target: "document" })
  closeOnClickOutSide(e) {
    if (e.target.parentNode !== this.element) {
      if (this.open) {
        this.closing.emit();
        window.setTimeout(() => {
          this.closed.emit();
        }, this.DELAY_TIME);
      }
      this.open = false;
    }
  }

  @Method()
  async toggle(): Promise<void> {
    this.toogleClass();
  }

  @Method()
  async dispose(): Promise<void> {
    this.element.remove();
  }

  @Event() opening: EventEmitter<void>;
  @Event() opened: EventEmitter<void>;
  @Event() closing: EventEmitter<void>;
  @Event() closed: EventEmitter<void>;
}
