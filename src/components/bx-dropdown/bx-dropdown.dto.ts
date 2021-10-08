import { Breadcrumb } from "../bx-breadcrumb/bx-breadcrumb.dto";
enum DropDirection {
  up = "dropup",
  right = "dropright",
  left = "dropleft",
  down = "",
}

interface DropdownItem extends Breadcrumb {
  disabled?: boolean;
}

type DropType = "down" | "up" | "left" | "right";

export { DropDirection, DropType, DropdownItem };
