import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Report.module.css";

export default function Report({ cards }) {
  const v4ID = uuidv4();
  return cards.map((card) => {
    return (
      <div key={v4ID} className={styles.reportDetail}>
        <span className={styles.reportText}>
          Card Number {card.number} unmounted {card.counter} times{" "}
        </span>
      </div>
    );
  });
}
