import styles from "./Wrapper.module.css";
import Card from "../Card/Card";

export default function Wrapper() {
 
  return (
    <div className={styles.wrapper}>
        <Card/>
      
    </div>
  );
}
