import { ITask } from "../../pages/ToDo";
import { Task } from "./Task";

import styles from "./TaskList.module.css";

interface TaskListProps {
  tasks: ITask[];
  handleChangeTask: (uuid: string) => void;
  handleDeleteTask: (uuid: string) => void;
}

export function TaskList({
  tasks,
  handleChangeTask,
  handleDeleteTask,
}: TaskListProps) {
  let tasksCriadas = tasks.length;
  let tasksConcluidas = tasks.reduce((acumulador, valorAtual) => {
    if (valorAtual.completed === true) {
      acumulador++;
    }
    return acumulador;
  }, 0);

  return (
    <div className={styles.taskListContainer}>
      <div className={styles.taskCountersContainer}>
        <div className={styles.taskCriadas}>
          Tarefas Criadas{" "}
          <span className={styles.indicador}>{tasksCriadas}</span>
        </div>
        <div className={styles.taskConcluidas}>
          Concluídas{" "}
          <span className={styles.indicador}>
            {tasksConcluidas} de {tasksCriadas}
          </span>
        </div>
      </div>
      <div className={styles.taskItensList}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            title={task.title}
            changeTask={() => handleChangeTask(task.id)}
            deleteTask={() => handleDeleteTask(task.id)}
            completed={task.completed}
          />
        ))}
      </div>
    </div>
  );
}
