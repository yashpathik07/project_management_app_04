import React, { useRef } from "react";
import styles from "./NewProject.module.css";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (
            enteredTitle.trim() === "" ||
            enteredDescription.trim() === "" ||
            enteredDueDate.trim() === ""
        ) {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }

    return (
        <>
            <Modal ref={modal} btnCaption="Okay">
                <h2>Invalid Input</h2>
                <p>Oops... looks like you forgot to enter a value.</p>
                <p>
                    Please make sure you provide a valid value for every input
                    field.
                </p>
            </Modal>
            <section id={styles.newProject}>
                <menu>
                    <li>
                        <button onClick={onCancel} className={styles.cancelBtn}>
                            cancel
                        </button>
                    </li>
                    <li>
                        <button onClick={handleSave} className={styles.saveBtn}>
                            save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input ref={title} label="title" type="text" />
                    <Input ref={description} label="description" textarea />
                    <Input ref={dueDate} label="due date" type="date" />
                </div>
            </section>
        </>
    );
}
