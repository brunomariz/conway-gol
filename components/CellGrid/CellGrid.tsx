import React, { ReactNode, useEffect } from "react";
import Dead from "../../classes/Dead";
import Live from "../../classes/Live";
import Cell from "../../classes/Cell";
import GridElement from "../GridElement/GridElement";
import sytles from "./cellGrid.module.css";
type Props = {
  elements: Cell[][];
  setElements: Function;
  elementFactory: () => Cell;
};

function CellGrid({ elements, setElements, elementFactory }: Props) {
  const handleClickFactory = (position: Position) => () => {
    let newElements = [...elements];
    if (elements[position.x][position.y] instanceof Dead) {
      newElements[position.x][position.y] = elementFactory();
    } else {
      newElements[position.x][position.y] = new Dead();
    }
    console.log(newElements);

    setElements(newElements);
  };

  return (
    <div className={sytles.cellGrid + " " + sytles.unselectable}>
      {elements.map((rowItem, row) => {
        return elements[row].map((item, column) => {
          return (
            <GridElement
              cell={item}
              handleClick={handleClickFactory({ x: row, y: column })}
            ></GridElement>
          );
        });
      })}
    </div>
  );
}

export default CellGrid;
