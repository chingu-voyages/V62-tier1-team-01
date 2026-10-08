import styles from "./styles.module.css";

/**
 * 
 * @param {string} props.children - Content displayed inside the button
 * @param {() => void} props.onClick - Click event handler
 * @param {"button" | "submit" | "reset"} props.type - Button type attribute
 * @param {string} props.marginRight - Optional right margin (e.g., "8px")
 * @param {string} props.className - Optional CSS class to customize button
 * @param {boolean} props.disabled - Optional boolean that will disable the button if true
 */
function Button({ children, onClick, type, marginRight, className, disabled }) {

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles["button"]} ${styles[className]}`}
      style={{ marginRight }}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
