import React from "react";
import styles from "./SelectedProject.module.css";
import Tasks from "./Tasks";
export default function SelectedProject({
    project,
    onDeleteProject,
    onAddTask,
    onDeleteTask,
    tasks,
}) {
    const formattedDate = new Date(project.dueDate).toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "short",
            day: "numeric",
        }
    );

    return (
        <div id={styles.project}>
            <header>
                <div className={styles.header}>
                    <h1>{project.title}</h1>
                    <button onClick={onDeleteProject}>Delete</button>
                </div>
                <div>
                    <p className={styles.date}>{formattedDate}</p>
                    <p className={styles.description}>{project.description}</p>
                </div>
            </header>
            <hr />
            <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
        </div>
    );
}
