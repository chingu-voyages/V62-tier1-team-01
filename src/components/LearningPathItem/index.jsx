import styles from "./styles.module.css";
import timeIcon from "../../assets/time-icon.svg";

// todo
function LearningPathItem({ item, index}) {
  const { title, description, estimate } = item;
  // console.log(item);
  return (
    <div className={styles.card}>
      <p className={styles.cardIndex}>{index < 9 ? "0": ""}{index+1}</p>
      <p className={styles.cardTitle}>{title}</p>
      <p className={styles.cardDescription}>{description}</p>
      <div className={styles.cardEstimate}>
        <img src={timeIcon}/>
        <p>{estimate} hours</p>
      </div>
    </div>
  );
}

export default LearningPathItem;
