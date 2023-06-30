import styles from "./Button.module.css"

function Button({ onClick }) {
  return (
    <div>
      <button className={styles.button} onClick={onClick}>
        Click to See
      </button>
    </div>
  );
}
export default Button;
