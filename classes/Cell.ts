import { ReactNode } from "react";
import Live from "./Live";

export default class Cell {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  tick(elements: Cell[][], position: Position): Cell {
    // overwrite on child classes
    return this;
  }
}
