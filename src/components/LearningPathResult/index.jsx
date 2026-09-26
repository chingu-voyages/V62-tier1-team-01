import styles from "./styles.module.css";
import shareIcon from "../../assets/share-icon.png";
import editIcon from "../../assets/edit-icon.png";
import LearningPathItem from "../LearningPathItem";

// todo
function LearningPathResult({ isWaiting, aiAnswer, userPrompt, paceObject }) {
  const { career, skillLevel, timeCommitment } = userPrompt;
  /**
   * 
   * @param {number} timeCommitment - User's answer in hours per week
   * @param {number} totalTime - Estimate from AI converted into hours
   */
  function calculatePathTimeEstimate (timeCommitment, totalTime){
    
  }

  if (isWaiting){ 
    return <div className="loader"></div>;
  }

  return (
    <div>
      <h1>Your Personalized Learning Path is Ready!</h1>
      <p>Based on your goals, skills, and test results, we’ve created a path that fits you.</p>
      <div class="flex-container">
        <div>
          <div class="card">
            <div class="profile-fact">
              <p class="profile-label">Target Role</p>
              <p class="profile-value"></p>
            </div>
            <div class="profile-fact">
              <p class="profile-label">Current Level</p>
              <p class="profile-value"></p>
            </div>
            <div class="profile-fact">
              <p class="profile-label"></p>
              <p class="profile-value"></p>
            </div>
            <div class="profile-fact">
              <p class="profile-label"></p>
              <p class="profile-value"></p>
            </div>
          </div>
          <button class="default-btn" disabled>
            <img src={shareIcon}/>
            Share
          </button>
          <button class="default-btn">
            <img src={editIcon}/>
            Edit Path
          </button>
        </div>
        <div>
          {aiAnswer.split("$").map((item) => (
            <LearningPathItem key={item} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LearningPathResult;
