import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./Card.module.css";
import CardDetails from "../CardDetals/CardDetails";

export default function Card({ cards }) {
  const [card, setCard] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleClick = (card) => {
    setCard((card.show = !card.show));
    return !card.show ? setCounter((card.counter += 1)) : null;
  };
  return cards.map((card) => {
    return (
      <div key={card.id} className={styles.card}>
        {card.show ? (
          <CardDetails
            card={card}
            className={styles.text}
            onClick={() => handleClick(card)}
          />
        ) : (
          <Button onClick={() => handleClick(card)} />
        )}
      </div>
    );
  });
}
