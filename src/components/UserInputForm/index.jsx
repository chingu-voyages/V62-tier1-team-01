import styles from "./styles.module.css";
import Button from "../Button";

function UserInputForm({ onSubmit, userPrompt, setUserPrompt, aiAnswer }) {
  function setCareer(data) {
    setUserPrompt({ ...userPrompt, career: data });
  }

  function setSkills(data) {
    setUserPrompt({ ...userPrompt, skills: data });
  }

  function setExperienceLevel(data) {
    setUserPrompt({ ...userPrompt, experienceLevel: data });
  }

  function setTimeCommitment(data) {
    setUserPrompt({ ...userPrompt, timeCommitment: data });
  }

  return (
    <div className="container">
      <div className={styles.formTitle}>
        <h2>Let's build your path</h2>
        <p>
          Tell us a bit about yourself so we can create a personalized <br />
          learning journey for you.
        </p>
      </div>
      <form onSubmit={onSubmit} className={styles.formBody}>
        <div className={styles.questionAndInput}>
          <div className={styles.questionHeader}>
            <div className={styles.circle}>
              <span>1</span>
            </div>
            <div className={styles.questionText}>
              <h4>What's your career goal?</h4>
              <p>What do you hope to achieve with NEXA?</p>
            </div>
          </div>
          <select
            className={styles.select}
            value={userPrompt.skillLevel}
            onChange={(e) => setCareer(e.target.value)}
          >
            <option>Front-end Development</option>
            <option>Back-end Development</option>
            <option>Full-Stack Development</option>
            <option>Data Science</option>
            <option>UI/UX Design</option>
          </select>
        </div>

        <div className={styles.questionAndInput}>
          <div className={styles.questionHeader}>
            <div className={styles.circle}>
              <span>2</span>
            </div>
            <div className={styles.questionText}>
              <h4>What are your background and existing skills?</h4>
              <p>
                Write down areas you're most excited to learn (i. e., HTML, CSS,
                JavaScript, React).
              </p>
            </div>
          </div>
          <input
            className={styles.input}
            type="text"
            value={userPrompt.skills}
            onChange={(e) => setSkills(e.target.value)}
            required
          />
        </div>

        <div className={styles.questionAndInput}>
          <div className={styles.questionHeader}>
            <div className={styles.circle}>
              <span>3</span>
            </div>
            <div className={styles.questionText}>
              <h4>What's your current experience level?</h4>
              <p>This helps us tailor the content to your needs.</p>
            </div>
          </div>
          <select
            className={styles.select}
            value={userPrompt.skillLevel}
            onChange={(e) => setExperienceLevel(e.target.value)}
          >
            <option>Complete Beginner</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        <div className={styles.questionAndInput}>
          <div className={styles.questionHeader}>
            <div className={styles.circle}>
              <span>4</span>
            </div>
            <div className={styles.questionText}>
              <h4>How much time can you spend learning each week?</h4>
              <p>Choose the option that best fits your schedule.</p>
            </div>
          </div>
          <select
            className={styles.select}
            value={userPrompt.skillLevel}
            onChange={(e) => setTimeCommitment(e.target.value)}
          >
            <option>Less than 3 hrs</option>
            <option>3 - 5 hours</option>
            <option>6 - 10 hours</option>
            <option>10+ hrs</option>
          </select>
        </div>

        <div className={styles.buttonDiv}>
          {aiAnswer === "" ? <Button>Submit</Button> : null}
        </div>
      </form>
    </div>
  );
}

export default UserInputForm;
