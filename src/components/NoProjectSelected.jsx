import React from "react";
import styles from "./NoProjectSelected.module.css";
import noProjectImg from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onStartAddProject }) {
    return (
        <section id={styles.noProject}>
            <img src={noProjectImg} alt="" />
            <h2>no project selected</h2>
            <p>Select a project or get started with a new one</p>
            <p>
                <Button onClick={onStartAddProject}>Create new project</Button>
            </p>
        </section>
    );
}
