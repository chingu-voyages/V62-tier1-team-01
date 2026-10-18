import styles from "./styles.module.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import editIcon from "../../assets/edit-icon.svg";
import LearningPathItem from "../LearningPathItem";
import Notification from "../Notification";
import Button from "../Button";
import { LearningPathContext } from "../../App";

function LearningPathResult() {
  const {
    aiAnswer,
    userPrompt,
    savePath,
    removeFromLocalStorage,
    pathNotification,
    inLocalStorage,
    goToTop
  } = useContext(LearningPathContext);
  const navigate = useNavigate();

  const { career, experienceLevel, timeCommitment } = userPrompt;

  if (!aiAnswer) {
    return (
      <div className={styles["pageContainer"]}>
        <h1 className={styles["title"]}>No Learning Path...</h1>
        <p className={styles["subtitle"]}>
          Please submit the career quiz to get started.
        </p>
        <div className={styles["quizButtonContainer"]}>
          <Button
            className="defaultButton"
            onClick={() => {
              navigate("/career-quiz");
              goToTop();
            }}
          >
            Take Career Quiz
          </Button>
        </div>
      </div>
    );
  }

  const totalTime = aiAnswer
    .map((step) => step["time_estimate"])
    .reduce((sum, step) => sum + step);

  /**
   * @param {number} timeCommitment - User's answer in hours per week
   * @param {number} totalTime - Estimate from AI converted into hours
   * @returns {string} - String representation of how long learning path will take
   */
  function calculatePathTimeEstimate(timeCommitmentString, totalTime = 30) {
    let timeCommitment = 1;
    switch (timeCommitmentString) {
      case "Less than 3 hours":
        timeCommitment = 1.5;
        break;
      case "3 - 5 hours":
        timeCommitment = 4;
        break;
      case "6 - 10 hours":
        timeCommitment = 8;
        break;
      case "10+ hours":
        timeCommitment = 10;
        break;
    }
    const weeks = totalTime / timeCommitment;
    return  Math.ceil(weeks / 4) + " months";
    // const numberOfYears = Math.floor(numberOfWeeks / 52);
    // const numberOfMonths = Math.floor((numberOfWeeks % 52) / 4);
    // const leftOverWeeks = Math.ceil(
    //   numberOfWeeks - numberOfYears * 52 - numberOfMonths * 4
    // );
    // return `~${numberOfYears > 0 ? `${numberOfYears} year${numberOfYears > 1 ? "s" : ""}` : ""}${numberOfYears > 0 && numberOfMonths > 0 ? ", " : ""}${numberOfMonths > 0 ? `${numberOfMonths} month${numberOfMonths > 1 ? "s" : ""}` : ""}${numberOfMonths > 0 && leftOverWeeks > 0 ? ", " : ""}${leftOverWeeks > 0 ? `${leftOverWeeks} week${leftOverWeeks > 1 ? "s" : ""}` : ""}`;
  }

  return (
    <div className={styles["pageContainer"]}>
      <h1 className={styles["title"]}>
        Your Personalized Learning Path is Ready!
      </h1>
      <p className={styles["subtitle"]}>
        Based on your goals, skills, and test results, we’ve created a path that
        fits you.
      </p>
      <div className={styles["flexContainer"]}>
        <div className={styles["flexChild"]}>
          <div className={styles["card"]}>
            <p className={styles["profileTitle"]}>Your Profile</p>
            <div className={styles["profileFact"]}>
              <p className={styles["profileLabel"]}>Target Role</p>
              <p
                className={`${styles["profileValue"]} ${styles["capitalize"]}`}
              >
                {career}
              </p>
            </div>
            <div className={styles["profileFact"]}>
              <p className={styles["profileLabel"]}>Current Level</p>
              <p className={styles["profileValue"]}>{experienceLevel}</p>
            </div>
            <div className={styles["profileFact"]}>
              <p className={styles["profileLabel"]}>Study Pace</p>
              <p className={styles["profileValue"]}>{timeCommitment}/week</p>
            </div>
            <div className={styles["profileFact"]}>
              <p className={styles["profileLabel"]}>Estimated Time</p>
              <p className={styles["profileValue"]}>
                {calculatePathTimeEstimate(timeCommitment, totalTime)}
              </p>
            </div>
          </div>
          <Button
            className="defaultButton"
            onClick={() => {
              navigate("/career-quiz");
              goToTop();
            }}
          >
            <img src={editIcon} />
            Edit Path
          </Button>
          <Notification
            type={
              pathNotification.message.indexOf("🎉") !== -1
                ? "success"
                : "error"
            }
            state={pathNotification}
          />
          {!inLocalStorage && (
            <Button
              className="submitButton"
              onClick={savePath}
              disabled={pathNotification.display}
            >
              {pathNotification.display ? "Saved!" : "Save Copy"}
            </Button>
          )}
          {inLocalStorage && (
            <Button
              className="submitButton"
              onClick={removeFromLocalStorage}
              disabled={pathNotification.display}
            >
              {pathNotification.display ? "Deleted..." : "Delete Copy"}
            </Button>
          )}
        </div>
        <div className={styles["flexChild"]}>
          <div className={styles["timeline"]}>
            {aiAnswer.map((item, index) => (
              <LearningPathItem key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningPathResult;
