import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { livingStatus } from "../@types/livingStatus";
import Dead from "../classes/Dead";
import Live from "../classes/Live";
import System from "../classes/System";
import Cell from "../classes/Cell";
import CellGrid from "../components/CellGrid/CellGrid";
import { loadDefaultErrorComponents } from "next/dist/server/load-components";
import Navbar from "../components/Navbar/Navbar";

const Home: NextPage = () => {
  const [system, setSystem] = useState(new System(18, 45));
  const [activeElement, setActiveElement] = useState(livingStatus.dead);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const newIntervalId = setInterval(() => {
      if (run) {
        setElements(system.tick().elements);
      }
    }, 1000);
    console.log(newIntervalId);

    for (let i = 1; i < Number(newIntervalId); i++) {
      window.clearInterval(i);
    }
  }, [run]);

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
    <div className="bg-gray-100">
      <Navbar
        setActiveElement={setActiveElement}
        handleTick={() => {
          setElements(system.tick().elements);
        }}
        setRun={setRun}
        run={run}
        setSystem={setSystem}
      ></Navbar>
      <div className="pt-28 px-[5rem] pb-0">
        <CellGrid
          elements={system.elements}
          setElements={setElements}
          elementFactory={elementFactory}
        ></CellGrid>
      </div>
    </div>
  );
};
export default Home;
