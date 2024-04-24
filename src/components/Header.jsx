import React from "react";
import logo from "../assets/logo.png";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header id={styles.header}>
            <div>
                <img src={logo} alt="" />
            </div>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Pricing</a>
                </li>
                <li>
                    <a href="">Contact us</a>
                </li>
            </ul>
        </header>
    );
}
