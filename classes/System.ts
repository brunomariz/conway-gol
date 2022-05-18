import Dead from "./Dead";
import Cell from "./Cell";

export default class System {
  sizeX: number;
  sizeY: number;
  elements: Cell[][];

  constructor(sizeX: number, sizeY: number, elements?: Cell[][]) {
    this.sizeX = sizeX;
    this.sizeY = sizeY;

    const emptyArray = [
      ...Array.from(Array(sizeX), () => new Array(sizeY).fill(new Dead())),
    ];
    this.elements = elements ?? emptyArray;
  }

  tick() {
    let newElements = this.elements.map((rowItem, row) => {
      return [...rowItem];
    });

    newElements = newElements.map((rowItem, row) => {
      return rowItem.map((item, column) => {
        return item.tick(this.elements, { x: row, y: column });
      });
    });

    this.elements = newElements;
    return this;
  }
}
