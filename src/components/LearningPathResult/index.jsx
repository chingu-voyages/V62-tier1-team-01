import styles from "./styles.module.css";
import shareIcon from "../../assets/share-icon.svg";
import editIcon from "../../assets/edit-icon.svg";
import LearningPathItem from "../LearningPathItem";
import BlushEffect from "../BlushEffect";

// todo
function LearningPathResult({ aiAnswer, userPrompt, resetForm, setInLocalStorage}) {
  const { career, skillLevel, timeCommitment } = userPrompt;
  const totalTime = aiAnswer.map(step => step["time_estimate"]).reduce((sum, step) => sum + step);

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
    return `~${numberOfYears > 0 ? `${numberOfYears} year${numberOfYears > 1 ? "s": ""}`: ""}${numberOfYears > 0 && numberOfMonths > 0 ? ", ": ""}${numberOfMonths > 0 ? `${numberOfMonths} month${numberOfMonths > 1 ? "s": ""}`: ""}${numberOfMonths > 0 && leftOverWeeks > 0 ? ", ": ""}${leftOverWeeks > 0 ? `${leftOverWeeks} week${leftOverWeeks > 1 ? "s": ""}`: ""}`;
  }

  //todo
  function shareProgress() {

  }

  //todo
  function saveToLocalStorage() {
    const learningPathString = JSON.stringify(aiAnswer);
    localStorage.setItem("nexa-ai-generated-learning-path", learningPathString);
    localStorage.setItem("nexa-user-answers", JSON.stringify(userPrompt));
    setInLocalStorage(true);
    console.log("Saved to local storage!");
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
    <div className={styles["pageContainer"]}>
      <BlushEffect className={styles["zIndexZero"]}/>
      <h1 className={styles["title"]}>Your Personalized Learning Path is Ready!</h1>
      <p className={styles["subtitle"]}>Based on your goals, skills, and test results, we’ve created a path that fits you.</p>
      <div className={styles["flexContainer"]}>
        <div className={styles["flexChild"]}>
          <div className={styles["card"]}>
            <p className={styles["profileTitle"]}>Your Profile</p>
            <div className={styles["profileFact"]}>
              <p className={styles["profileLabel"]}>Target Role</p>
              <p className={`${styles["profileValue"]} ${styles["capitalize"]}`}>{career}</p>
            </div>
            <div className={styles["profileFact"]}>
              <p className={styles["profileLabel"]}>Current Level</p>
              <p className={styles["profileValue"]}>{skillLevel || "Beginner"}</p>
            </div>
            <div className={styles["profileFact"]}>
              <p className={styles["profileLabel"]}>Study Pace</p>
              <p className={styles["profileValue"]}>{timeCommitment} hour{timeCommitment > 1 ? "s": ""}/week</p>
            </div>
            <div className={styles["profileFact"]}>
              <p className={styles["profileLabel"]}>Estimated Time</p>
              <p className={styles["profileValue"]}>{calculatePathTimeEstimate(timeCommitment, totalTime)}</p>
            </div>
          </div>
          <button className={styles["defaultButton"]} disabled onClick={shareProgress}>
            <img src={shareIcon}/>
            Share
          </button>
          <button className={styles["defaultButton"]} onClick={resetForm}>
            <img src={editIcon}/>
            Edit Path
          </button>
        </div>
        <div className={styles["flexChild"]}>
          <div className={styles["timeline"]}>
            {aiAnswer.map((item, index) => (
              <LearningPathItem key={item.title} item={item} index={index}/>
            ))}
          </div>
          <button className={styles["submitButton"]} onClick={savePath}>Save</button>
          {/* {aiAnswer.split("$").map((item) => (
            <LearningPathItem key={item} item={item} />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default LearningPathResult;
