import React from "react";
import Styles from "./CardDetails.module.css";

export default function CardDetails({ card, onClick }) {
  return (
    <div>
      <span className={Styles.cardNumber}>{card.number}</span>
      <button className={Styles.closeCard} onClick={onClick}>
        Card Hidden
      </button>
    </div>
  );
}
