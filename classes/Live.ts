import Dead from "./Dead";
import Cell from "./Cell";

export default class Live extends Cell {
  constructor() {
    super("#101044");
  }

  tick(elements: Cell[][], position: Position): Cell {
    const liveNeighbors = this.countLiveNeighbors(elements, position);

    if (liveNeighbors == 2 || liveNeighbors == 3) {
      return this;
    }
    return new Dead();
  }

  countLiveNeighbors(elements: Cell[][], position: Position) {
    let count = 0;
    for (let i = position.x - 1; i < position.x + 2; i++) {
      for (let j = position.y - 1; j < position.y + 2; j++) {
        if (i > -1 && i < elements.length && j > -1 && j < elements[i].length) {
          if (elements[i][j] instanceof Live) {
            count += 1;
          }
        }
      }
    }
    return count - 1;
  }
}
