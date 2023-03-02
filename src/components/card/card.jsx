import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styles from "./card.module.css";

const Card = ({ title, children }) => {
    return (
        <aside className={styles.card}>
            <header>
                <h2>{title}</h2>
                <span>
                    <AiOutlineInfoCircle />
                </span>
            </header>
            <div className={styles.content}>{children}</div>
        </aside>
    );
};
export default Card;
