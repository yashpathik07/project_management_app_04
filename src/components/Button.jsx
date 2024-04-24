import React from "react";
import styles from "./Button.module.css";

export default function Button({ children, onClick, ...props }) {
    return (
        <button id={styles.button} onClick={onClick}>
            {children}
        </button>
    );
}
