import styles from "./styles.module.css";
import shareIcon from "../../assets/share-icon.svg";
import editIcon from "../../assets/edit-icon.svg";
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

  //todo
  function shareProgress() {

  }

  //todo
  function saveToLocalStorage() {
    return 0;
  }

  //todo
  function takeScreenshot() {
    return 0;
  }

  //todo
  function savePath() {
    saveToLocalStorage();
    takeScreenshot();
    return 0;
  }

  return (
    <div className={styles.pageContainer}>
      <BlushEffect className={styles.zIndexZero}/>
      <h1 className={styles.title}>Your Personalized Learning Path is Ready!</h1>
      <p className={styles.subtitle}>Based on your goals, skills, and test results, we’ve created a path that fits you.</p>
      <div className={styles.flexContainer}>
        <div className={styles.flexChild}>
          <div className={styles.card}>
            <p className={styles.profileTitle}>Your Profile</p>
            <div className={styles.profileFact}>
              <p className={styles.profileLabel}>Target Role</p>
              <p className={styles.profileValue}>{career}</p>
            </div>
            <div className={styles.profileFact}>
              <p className={styles.profileLabel}>Current Level</p>
              <p className={styles.profileValue}>{skillLevel || "Beginner"}</p>
            </div>
            <div className={styles.profileFact}>
              <p className={styles.profileLabel}>Study Pace</p>
              <p className={styles.profileValue}>Balanced</p>
            </div>
            <div className={styles.profileFact}>
              <p className={styles.profileLabel}>Estimated Time</p>
              <p className={styles.profileValue}>{calculatePathTimeEstimate(timeCommitment)}</p>
            </div>
          </div>
          <button className={styles.defaultButton} disabled onClick={shareProgress}>
            <img src={shareIcon}/>
            Share
          </button>
          <button className={styles.defaultButton} onClick={resetForm}>
            <img src={editIcon}/>
            Edit Path
          </button>
        </div>
        <div className={styles.flexChild}>
          <div className={styles.timeline}>
            {dummyData.map((item, index) => (
              <LearningPathItem key={item.key} item={item} index={index}/>
            ))}
          </div>
          <button className={styles.submitButton} onClick={savePath}>Save</button>
          {/* {aiAnswer.split("$").map((item) => (
            <LearningPathItem key={item} item={item} />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default LearningPathResult;
