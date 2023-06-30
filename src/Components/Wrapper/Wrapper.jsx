import { useState } from "react";
import styles from "./Wrapper.module.css";
import cards from "../../assets/data/cards"
import Section from "../Section/Section"
import Report from "../Report/Report"

export default function Wrapper() {
  const [showReport, setShowReport] = useState(false);
  const handleClick = () => setShowReport(!showReport);

  return (
    <div className={styles.wrapper}>
      <Section cards={cards} />
      <button className={styles.report} onClick={handleClick}>
        Report
      </button>
      {showReport ? <Report cards={cards} className={styles.report} /> : null}
    </div>
  );
}
