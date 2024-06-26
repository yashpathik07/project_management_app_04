import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const Modal = forwardRef(function Modal({ children, btnCaption }, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },
        };
    });

    return createPortal(
        <dialog ref={dialog}>
            {children}
            <form method="dialog">
                <button>{btnCaption}</button>
            </form>
        </dialog>,
        document.getElementById("modal")
    );
});

export default Modal;
