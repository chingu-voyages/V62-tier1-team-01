import styles from "./styles.module.css";

function NextButton({ children, nextStep }) {
  return (
    <button onClick={nextStep} className={styles.buttonNextPage}>
      {children}
    </button>
  )
}

export default NextButton;