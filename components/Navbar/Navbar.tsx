import React from "react";
import { livingStatus } from "../../@types/livingStatus";
import Dead from "../../classes/Dead";
import Live from "../../classes/Live";
import System from "../../classes/System";
import styles from "./navbar.module.css";
import { FiRefreshCw, FiPause, FiPlay, FiPenTool } from "react-icons/fi";

type Props = {
  setRun: Function;
  setSystem: Function;
  setActiveElement: Function;
  run: boolean;
  handleTick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function Navbar({
  setActiveElement,
  setRun,
  setSystem,
  run,
  handleTick,
}: Props) {
  return (
    <div className="flex flex-col border-b border-black fixed bg-gray-100 w-full top-0">
      <span className="mr-auto fixed font-bold text-gray-900 text-2xl pt-6 pl-5">
        Conway's Game Of Life
      </span>
      <div className="flex justify-center">
        <button
          className={styles.baseButton}
          onClick={() => {
            setRun(false);
            setSystem(new System(18, 45));
          }}
        >
          <FiRefreshCw></FiRefreshCw>
        </button>
        <button
          className={styles.baseButton + " " + styles.outlineButton}
          onClick={() => {
            setRun(false);
          }}
        >
          <div className="flex items-center">
            <FiPause></FiPause> <span className="pl-1">Stop</span>
          </div>
        </button>
        <button
          className={
            styles.baseButton +
            ` bg-gray-900 text-gray-100 ${run && "text-opacity-30"}`
          }
          onClick={() => {
            setRun(true);
          }}
        >
          <div className="flex items-center">
            <FiPlay></FiPlay> <span className="pl-1">Start</span>
          </div>
        </button>
        <button
          className={styles.baseButton + " " + styles.outlineButton}
          onClick={handleTick}
        >
          Tick
        </button>
      </div>
      <div className="flex w-full justify-center">
        <button
          className={styles.baseButton}
          onClick={() => setActiveElement(livingStatus.dead)}
        >
          <div className="flex items-center">
            <span
              style={{ backgroundColor: new Dead().color }}
              className="p-1 rounded-[100%]"
            >
              <FiPenTool></FiPenTool>
            </span>
            <span className="pl-1">Dead</span>
          </div>
        </button>
        <button
          className={styles.baseButton}
          onClick={() => setActiveElement(livingStatus.alive)}
        >
          <div className="flex items-center">
            <span
              style={{ backgroundColor: new Live().color }}
              className="p-1 rounded-[100%] text-gray-100"
            >
              <FiPenTool></FiPenTool>
            </span>
            <span className="pl-1">Alive</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
