import React from "react";
import styles from "./CardDetails.module.css";

export default function CardDetails({ card, onClick }) {
  return (
    <div>
      <span className={styles.cardNumber}>{card.number}</span>
      <button className={styles.closeCard} onClick={onClick}>
        Hide Card 
      </button>
    </div>
  );
}
