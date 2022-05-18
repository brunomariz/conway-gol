import React, { useEffect, useState } from "react";
import Cell from "../../classes/Cell";
import styles from "./gridElement.module.css";
type Props = { cell: Cell; handleClick: () => void };

function GridElement({ cell, handleClick }: Props) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      onMouseEnter={(e) => {
        if (e.buttons == 1 || e.buttons == 3) {
          e.stopPropagation();

          handleClick();
          setClicked(!clicked);
        }
      }}
      onMouseDown={() => {
        handleClick();
        setClicked(!clicked);
      }}
      className={styles.baseContainerElement}
    >
      <div
        className={styles.baseInnerElement + ` ${clicked && styles.animate}`}
        style={{ backgroundColor: cell.color }}
      ></div>
    </div>
  );
}

export default GridElement;
