import React, { forwardRef } from "react";
import styles from "./Input.module.css";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
    return (
        <p id={styles.input}>
            <label htmlFor="">{label}</label>
            {textarea ? (
                <textarea ref={ref} {...props} />
            ) : (
                <input ref={ref} {...props} />
            )}
        </p>
    );
});

export default Input;
