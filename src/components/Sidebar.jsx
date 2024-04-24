import React from "react";
import styles from "./Sidebar.module.css";
import Button from "./Button";

export default function Sidebar({
    onStartAddProject,
    projects,
    onSelectProject,
}) {
    return (
        <aside id={styles.sidebar}>
            <h2>your projects</h2>
            <div>
                <Button onClick={onStartAddProject}>+ add project</Button>
            </div>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <button
                            onClick={() => onSelectProject(project.id)}
                            className={styles.projectBtn}
                        >
                            {project.title}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
