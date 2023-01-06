import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import styles from "./TaskControls.module.css";

interface TaskControlsProps {
  adicionarNovaTask: (task: string) => void;
}

export function TaskControls({ adicionarNovaTask }: TaskControlsProps) {
  let [newTask, setNewTask] = useState("");
  return (
    <div>
      <div className={styles.textField}>
        <input
          placeholder="Adicione uma nova tarefa"
          onChange={(event) => setNewTask(event.target.value)}
          value={newTask}
        />
        <button
          className={styles.button}
          type="button"
          onClick={() => {
            adicionarNovaTask(newTask);
            setNewTask("");
          }}
        >
          Criar
          <PlusCircle size={18} className={styles.plusIcon} />
        </button>
      </div>
    </div>
  );
}
