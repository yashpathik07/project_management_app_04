import React, { useState } from "react";
import styles from "./NewTask.module.css";

export default function NewTask({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState("");

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        if (enteredTask.trim() === "") {
            return;
        }
        onAdd(enteredTask);
        setEnteredTask("");
    }

    return (
        <div id={styles.newTask}>
            <input type="text" onChange={handleChange} value={enteredTask} />
            <button onClick={handleClick}>Add Task</button>
        </div>
    );
}
