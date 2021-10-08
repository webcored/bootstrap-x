enum DropDirection {
  up = "dropup",
  right = "dropright",
  left = "dropleft",
  down = "",
}

interface DropdownItem {
  text: string;
  link?: string;
  disabled?: boolean;
  active?: boolean;
  isHeader?: boolean;
}

type Divider = "divider";

type DropType = "down" | "up" | "left" | "right";

export { DropDirection, DropType, DropdownItem, Divider };
