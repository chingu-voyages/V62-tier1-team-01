import styles from "./styles.module.css";
// import shareIcon from "../../assets/share-icon.svg";
import editIcon from "../../assets/edit-icon.svg";
import LearningPathItem from "../LearningPathItem";
import Notification from "../Notification";

/**
 * 
 * @param {import("react").PropsWithoutRef} props 
 * @param {{title: string, description: string, time_estimate: number}[]} props.aiAnswer - List of objects containing steps in learning path, including title, description and estimate time to complete
 * @param {Object} props.userPrompt - Object containing user's answers to the form
 * @param {Function} props.handleSubmit - An onClick handler that takes the user to the previous page
 * @param {Function} props.savePath - A function that saves the current learning path to localStorage
 * @param {Function} props.deletePath - A function that deletes the localStorage copy of the learning path
 * @param {{display: boolean, message: string}} props.notificationState - An object containing the state for the save notification
 * @param {boolean} props.inLocalStorage - A boolean showing whether the learning path is saved in localStorage
 * @returns {Element} - A component containing the Learning Path page
 */
function LearningPathResult({ aiAnswer, userPrompt, handlePrevious, savePath, deletePath, notificationState, inLocalStorage}) {
  const { career, skillLevel, timeCommitment } = userPrompt;
  const totalTime = aiAnswer.map(step => step["time_estimate"]).reduce((sum, step) => sum + step);

  /**
   * @param {number} timeCommitment - User's answer in hours per week
   * @param {number} totalTime - Estimate from AI converted into hours
   * @returns {string} - String representation of how long learning path will take
   */
  function calculatePathTimeEstimate (timeCommitmentString, totalTime=30){
    let timeCommitment = 1;
    switch (timeCommitmentString){
      case "Less than 3 hrs":
        timeCommitment = 1.5;
        break;
      case "3 - 5 hours":
        timeCommitment = 4;
        break;
      case "6 - 10 hours":
        timeCommitment = 8;
      case "10+ hrs":
        timeCommitment = 10;
    }
    const numberOfWeeks = totalTime/timeCommitment;
    const numberOfYears = Math.floor(numberOfWeeks/52);
    const numberOfMonths = Math.floor((numberOfWeeks % 52)/4);
    const leftOverWeeks = Math.ceil(numberOfWeeks - numberOfYears*52 - numberOfMonths*4);
    return `~${numberOfYears > 0 ? `${numberOfYears} year${numberOfYears > 1 ? "s": ""}`: ""}${numberOfYears > 0 && numberOfMonths > 0 ? ", ": ""}${numberOfMonths > 0 ? `${numberOfMonths} month${numberOfMonths > 1 ? "s": ""}`: ""}${numberOfMonths > 0 && leftOverWeeks > 0 ? ", ": ""}${leftOverWeeks > 0 ? `${leftOverWeeks} week${leftOverWeeks > 1 ? "s": ""}`: ""}`;
  }

  //todo
  // function shareProgress() {

  // }

  return (
    <div className={styles["pageContainer"]}>
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
          {/* <button className={styles["defaultButton"]} disabled onClick={shareProgress}>
            <img src={shareIcon}/>
            Share
          </button> */}
          <button className={styles["defaultButton"]} onClick={handlePrevious}>
            <img src={editIcon}/>
            Edit Path
          </button>
          <Notification type="success" state={notificationState}/>
          {!inLocalStorage &&
            <button className={styles["submitButton"]} onClick={savePath} disabled={notificationState.display}>{notificationState.display ? "Saved!": "Save Copy"}</button>
          }{inLocalStorage &&
            <button className={styles["submitButton"]} onClick={deletePath} disabled={notificationState.display}>{notificationState.display ? "Deleted..." : "Delete Copy"}</button>
          }
        </div>
        <div className={styles["flexChild"]}>
          <div className={styles["timeline"]}>
            {aiAnswer.map((item, index) => (
              <LearningPathItem key={item.title} item={item} index={index}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningPathResult;
