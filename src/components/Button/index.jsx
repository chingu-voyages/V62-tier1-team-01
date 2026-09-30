import styles from "./styles.module.css";

function Button({ children, onClick, type, marginRight }) {

  return (
    <button
      onClick={onClick}
      type={type}
      className={styles["button"]}
      style={{ marginRight }}
    >
      {children}
    </button>
  );
}

export default Button;
