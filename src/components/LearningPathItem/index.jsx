import styles from "./styles.module.css";
import timeIcon from "../../assets/time-icon.svg";

/**
 * @param {Object} props.item - An object containing information for one step of learning path, including title, description and estimate time to complete
 * @param {number} props.index - The number showing the order of the step in the path
 */
function LearningPathItem({ item, index }) {
  const { title, description, time_estimate } = item;
  // console.log(item);
  return (
    <details open className={styles.card}>
      <summary className={styles.cardIndex}>
        <p className={styles.cardIndex}>
          {index < 9 ? "0" : ""}
          {index + 1}
        </p>
        <p className={styles.cardTitle}>{title}</p>
      </summary>
      <p className={styles.cardDescription}>{description}</p>
      <div className={styles.cardEstimate}>
        <img src={timeIcon} />
        <p>{time_estimate} hours</p>
      </div>
    </details>
  );
}

export default LearningPathItem;
