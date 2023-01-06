import { useState } from "react";
import styles from "./Task.module.css";
import { Trash } from "phosphor-react";

interface TaskProps {
  title: string;
  changeTask: () => void;
  deleteTask: () => void;
  completed: boolean;
}

export function Task({ title, changeTask, completed, deleteTask }: TaskProps) {
  return (
    <div className={styles.taskItemContainer}>
      <div className={styles.checkContainer} onClick={changeTask}>
        <input type="checkbox" checked={completed} />
        <span className={styles.checkMark}></span>
      </div>
      <div className={`${styles.title} ${completed && styles.completed}`}>
        {title}
      </div>
      <div>
        <Trash size={22} className={styles.trashIcon} onClick={deleteTask} />
      </div>
    </div>
  );
}
