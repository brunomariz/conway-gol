import Live from "./Live";
import Cell from "./Cell";

export default class Dead extends Cell {
  constructor() {
    super("#d4d4d4");
  }

  tick(elements: Cell[][], position: Position): Cell {
    const liveNeighbors = this.countLiveNeighbors(elements, position);
    if (liveNeighbors == 3) {
      return new Live();
    }
    return this;
  }

  countLiveNeighbors(elements: Cell[][], position: Position) {
    let count = 0;
    for (let i = position.x - 1; i < position.x + 2; i++) {
      for (let j = position.y - 1; j < position.y + 2; j++) {
        if (i > -1 && i < elements.length && j > -1 && j < elements[i].length) {
          if (elements[i][j] instanceof Live) {
            count += 1;
            console.log("found");
          }
        }
      }
    }
    return count;
  }
}
