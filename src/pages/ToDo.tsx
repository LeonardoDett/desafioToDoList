import { useState } from "react";
import { Header } from "../components/Header";
import { TaskControls } from "../components/TaskControls";
import { TaskList } from "../components/TaskList";
import uuid from "react-uuid";

import styles from "./ToDo.module.css";

export interface ITask {
  id: string;
  title: string;
  completed: boolean;
}

export function ToDo() {
  let [tasks, setTasks] = useState<ITask[]>([]);

  function adicionarNovaTask(task: string) {
    let newTask = {
      id: uuid(),
      title: task,
      completed: false,
    };
    setTasks((prevState) => {
      return [...prevState, newTask];
    });
  }

  function handleChangeTask(uuid: string) {
    setTasks((prevState) => {
      let newState: ITask[] = prevState.map((task) => {
        if (task.id === uuid) {
          if (task.completed === false) {
            task.completed = true;
          } else {
            task.completed = false;
          }
        }
        return task;
      });
      return [...newState];
    });
  }
  function handleDeleteTask(uuid: string) {
    setTasks((prevState) => {
      let newState: ITask[] = prevState.filter((task) => task.id !== uuid);
      return [...newState];
    });
  }
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <TaskControls adicionarNovaTask={adicionarNovaTask} />
        <TaskList
          tasks={tasks}
          handleChangeTask={handleChangeTask}
          handleDeleteTask={handleDeleteTask}
        />
      </main>
    </>
  );
}
