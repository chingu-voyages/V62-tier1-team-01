import styles from "./styles.module.css";

function Button({ children, onNext, onPrevious, onClick, marginRight }) {

  return (
    <button
      onClick={onClick}
      className={styles["button"]}
      style={{ marginRight }}
    >
      {children}
    </button>
  );
}

export default Button;
