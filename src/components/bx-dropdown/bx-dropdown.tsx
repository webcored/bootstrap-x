import {
  Component,
  ComponentInterface,
  Host,
  h,
  Prop,
  State,
  Method,
  Element,
  Listen,
} from "@stencil/core";
import { Sizes, Variants } from "../../shared/bootstrap.dto";
import { DropDirection, DropType } from "./bx-dropdown.dto";

@Component({
  tag: "bx-dropdown",
  styleUrl: "bx-dropdown.css",
  shadow: false,
})
export class BxDropdown implements ComponentInterface {
  // states
  @Element() element: HTMLElement;
  @State() open: boolean = false;
  // props
  @Prop() variant: Variants = Variants.secondary;
  @Prop() size: Sizes;
  @Prop() split: boolean = false;
  @Prop() isLink: boolean = false;
  @Prop() actionText: string = "Dropdown button";
  @Prop() direction: DropType = "down";
  // close dropdown when other part of the dom is clicked
  @Listen("click", { target: "document" })
  closeOnClickOutSide(e) {
    if (e.target.parentNode !== this.element) {
      this.open = false;
    }
  }

  // renders button based on props
  private renderActionButton() {
    if (this.split) {
      let buttons = [
        <button
          type="button"
          class={`btn btn-${this.variant} btn-${this.size ?? "md"}`}
        >
          {this.actionText}
        </button>,
        <button
          type="button"
          class={`
            btn btn-${this.variant} 
            btn-${this.size ?? "md"}
            dropdown-toggle dropdown-toggle-split
          `}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={this.toogleClass.bind(this)}
        >
          <span class="sr-only">{this.actionText} Toggle Dropdown</span>
        </button>,
      ];
      return this.direction === "left" ? buttons.reverse() : buttons;
    } else {
      return (
        <button
          class={`btn btn-${this.variant} dropdown-toggle
           btn-${this.size ?? "md"}`}
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={this.toogleClass.bind(this)}
        >
          {this.actionText}
        </button>
      );
    }
  }

  // renders anchor button based on props
  private renderActionAchor() {
    if (this.split) {
      let buttons = [
        <a
          role="button"
          href="#"
          class={`btn btn-${this.variant} btn-${this.size ?? "md"}`}
        >
          {this.actionText}
        </a>,
        <button
          type="button"
          class={`
            btn btn-${this.variant} 
            btn-${this.size ?? "md"}
            dropdown-toggle dropdown-toggle-split
          `}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={this.toogleClass.bind(this)}
        >
          <span class="sr-only">{this.actionText} Toggle Dropdown</span>
        </button>,
      ];
      return this.direction === "left" ? buttons.reverse() : buttons;
    } else {
      return (
        <a
          class={`btn btn-${this.variant} dropdown-toggle
           btn-${this.size ?? "md"}`}
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={this.toogleClass.bind(this)}
        >
          {this.actionText}
        </a>
      );
    }
  }

  private async toogleClass(): Promise<void> {
    this.open = !this.open;
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
          <a class="dropdown-item" href="#">
            Action
          </a>
          <a class="dropdown-item" href="#">
            Another action
          </a>
          <a class="dropdown-item" href="#">
            Something else here
          </a>
        </div>
        <slot></slot>
      </Host>
    );
  }

  @Method()
  async dropdown(): Promise<void> {
    this.toogleClass();
  }

  @Method()
  async dispose(): Promise<void> {
    this.element.remove();
  }
}
