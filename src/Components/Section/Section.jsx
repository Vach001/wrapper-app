import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";

export default function Section ({ cards }) {
  return (
    <div className={styles.section}>
      <Card cards={cards} />
    </div>
  );
}
