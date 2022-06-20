/*
 * El thead es para definir el los encabezados de la tabla
 * El tbody es el cuerpo de la tabla
 * tr columna de la cabecera
 * Si vamos a guardar un nuevo item en un arreglo, crea un
 * nuevo arreglo con ese nuevo item, en lugar de alterarlo
 *
 * El useEffect se ejecuta cada vez, que se cambie el estado o
 * estados que estan en el arreglo de dependencias
 *
 * Hay que tener cuidado al trabajar con react strict mode
 * ya que vuelve a ejecutar todo el programa como inicialmente
 * estaba es decir para el programa no hay nada guardado en el local
 * storage.
 */

import { useEffect, useState } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";

const App = () => {
  const [taskItems, setTaskItems] = useState([]);

  const createNewTask = (taskName) => {
    if (!taskItems.find((task) => task.name === taskName.name)) {
      setTaskItems([...taskItems, taskName]);
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("tasks");
    if (data) setTaskItems(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask}></TaskCreator>
      <TaskTable taskItems={taskItems}></TaskTable>
    </div>
  );
};

export default App;
