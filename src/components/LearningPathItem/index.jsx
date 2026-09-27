import styles from "./styles.module.css";
import timeIcon from "../../assets/time-icon.png";

// todo
function LearningPathItem({ item, index}) {
  const { title, description, estimate } = item;
  // console.log(item);
  return (
    <div className={styles.card}>
      <p>{index+1}</p>
      <p>{title}</p>
      <p>{description}</p>
      <div>
        <img src={timeIcon}/>
        <p>{estimate} hrs</p>
      </div>
    </div>
  );
}

export default LearningPathItem;
