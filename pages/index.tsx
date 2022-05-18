import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { livingStatus } from "../@types/livingStatus";
import Dead from "../classes/Dead";
import Live from "../classes/Live";
import System from "../classes/System";
import Cell from "../classes/Cell";
import CellGrid from "../components/CellGrid/CellGrid";

const Home: NextPage = () => {
  const [system, setSystem] = useState(new System(10, 45));
  const [activeElement, setActiveElement] = useState(livingStatus.dead);

  const setElements = (elements: Cell[][]) => {
    let newSystem = new System(system.sizeX, system.sizeY, system.elements);
    newSystem.elements = elements;
    setSystem(newSystem);
  };

  const elementFactory = () => {
    switch (activeElement) {
      case livingStatus.dead:
        return new Dead();
      case livingStatus.alive:
        return new Live();

      default:
        return new Dead();
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <button
        className="p-2 m-2"
        onClick={() => {
          setSystem(new System(10, 45));
        }}
      >
        Reset
      </button>
      <button
        className="p-2 m-2"
        onClick={() => {
          setElements(system.tick().elements);
        }}
      >
        Tick
      </button>
      <button
        className="p-2 m-2"
        onClick={() => setActiveElement(livingStatus.dead)}
      >
        Dead
      </button>
      <button
        className="p-2 m-2"
        onClick={() => setActiveElement(livingStatus.alive)}
      >
        Alive
      </button>
      <CellGrid
        elements={system.elements}
        setElements={setElements}
        elementFactory={elementFactory}
      ></CellGrid>
    </div>
  );
};
export default Home;
