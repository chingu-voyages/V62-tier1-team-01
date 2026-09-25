import styles from "./styles.module.css";

function Button({ children, onNext, onPrevious, marginRight }) {
  if (onPrevious) {
    return (
      <button
        onClick={onPrevious}
        className={styles.button}
        style={{ marginRight: marginRight }}
      >
        {children}
      </button>
    );
  }

  if (onNext) {
    return (
      <button
        onClick={onNext}
        className={styles.button}
        style={{ marginRight: marginRight }}
      >
        {children}
      </button>
    );
  }

  return (
    <button className={styles.button} style={{ marginRight: marginRight }}>
      {children}
    </button>
  );
}

export default Button;
