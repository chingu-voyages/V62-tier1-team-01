import styles from "./styles.module.css";
import shareIcon from "../../assets/share-icon.png";
import editIcon from "../../assets/edit-icon.png";
import LearningPathItem from "../LearningPathItem";
import BlushEffect from "../BlushEffect";

// todo
function LearningPathResult({ aiAnswer, userPrompt, resetForm}) {
  const { career, skillLevel, timeCommitment } = userPrompt;

  const dummyData = [
    {
      key: "A",
      title: "Learn HTML",
      description: "Here is the description",
      estimate: 5
    },
    {
      key: "B",
      title: "Learn HTML",
      description: "Here is the description",
      estimate: 5
    },
    {
      key: "C",
      title: "Learn HTML",
      description: "Here is the description",
      estimate: 5
    },
    {
      key: "D",
      title: "Learn HTML",
      description: "Here is the description",
      estimate: 5
    },
    {
      key: "E",
      title: "Learn HTML",
      description: "Here is the description",
      estimate: 5
    },
  ]
  /**
   * 
   * @param {number} timeCommitment - User's answer in hours per week
   * @param {number} totalTime - Estimate from AI converted into hours
   */
  function calculatePathTimeEstimate (timeCommitment, totalTime=30){
    const numberOfWeeks = totalTime/timeCommitment;
    const numberOfYears = Math.floor(numberOfWeeks/52);
    const numberOfMonths = Math.floor((numberOfWeeks % 52)/4);
    const leftOverWeeks = Math.ceil(numberOfWeeks - numberOfYears*52 - numberOfMonths*4);
    return `~${numberOfYears > 0 ? `${numberOfYears} years, `: ""}${numberOfMonths > 0 ? `${numberOfMonths} months, `: ""}${leftOverWeeks} weeks`;
  }

  return (
    <div class={styles.pageContainer}>
      <BlushEffect className={styles.zIndexZero}/>
      <h1 class={styles.title}>Your Personalized Learning Path is Ready!</h1>
      <p class={styles.subtitle}>Based on your goals, skills, and test results, we’ve created a path that fits you.</p>
      <div class={styles.flexContainer}>
        <div class={styles.flexChild}>
          <div class={styles.card}>
            <p className={styles.profileTitle}>Your Profile</p>
            <div class={styles.profileFact}>
              <p class={styles.profileLabel}>Target Role</p>
              <p class={styles.profileValue}>{career}</p>
            </div>
            <div class={styles.profileFact}>
              <p class={styles.profileLabel}>Current Level</p>
              <p class={styles.profileValue}>{skillLevel || "Beginner"}</p>
            </div>
            <div class={styles.profileFact}>
              <p class={styles.profileLabel}>Study Pace</p>
              <p class={styles.profileValue}>Balanced</p>
            </div>
            <div class={styles.profileFact}>
              <p class={styles.profileLabel}>Estimated Time</p>
              <p class={styles.profileValue}>{calculatePathTimeEstimate(timeCommitment)}</p>
            </div>
          </div>
          <button class={styles.defaultButton} disabled>
            <img src={shareIcon}/>
            Share
          </button>
          <button class={styles.defaultButton} onClick={resetForm}>
            <img src={editIcon}/>
            Edit Path
          </button>
        </div>
        <div class={styles.flexChild}>
          {dummyData.map((item, index) => (
            <LearningPathItem key={item.key} item={item} index={index}/>
          ))}
          {/* {aiAnswer.split("$").map((item) => (
            <LearningPathItem key={item} item={item} />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default LearningPathResult;
