import styles from "./styles.module.css";

/**
 * 
 * @param {string} props.children - Content displayed inside the button
 * @param {() => void} props.onClick - Click event handler
 * @param {"button" | "submit" | "reset"} props.type - Button type attribute
 * @param {string} props.marginRight - Optional right margin (e.g., "8px")
 */
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
