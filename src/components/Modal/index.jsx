import styles from "./styles.module.css";
import NextButton from "../NextButton";

function Modal({ onNextStep }) {
  return (
    <div className="container">
      <div className={styles.modalBox}>
        <p className={styles.subtitle}>READY TO START?</p>
        <h2 className={styles.title}>Your Next Milestone Starts Here.</h2>
        <p className={styles.text}>Join thousands of learners and build your future with Nexa.</p>
        <NextButton nextStep={onNextStep}>Get Started</NextButton>
      </div>
    </div>
  )
}

export default Modal;