import styles from "./styles.module.css";
import playButton from "/src/assets/play-button.svg";
import separationBar from "/src/assets/separation-bar.svg";

function BannerTextBlock({ onNextStep }) {
  return (
    <div className={styles.textSection}>
      <div>
        <span className={styles.smallTitle}>AI-POWERED LEARNING PATHS</span>
        <h2 className={styles.mainTitle}>
          From Curiosity
          <br />
          to Career.
        </h2>
        <p className={styles.text}>
          Turn your goals into a clear, step-by-step learning journey. Our AI analyzes your current level, identifies the most relevant skills, and builds a personalized roadmap to help you grow faster and with confidence—no more guessing what to learn next.
        </p>
      </div>
      <div className={styles.buttonsBox}>
        <button className={styles.buttonNextPage} onClick={onNextStep}>
          <span>Generate your path</span>
        </button>
        <button className={styles.buttonPlay}>
          <img className={styles.iconPlay} src={playButton} alt="play button" />
          <span>Watch demo</span>
        </button>
      </div>
      <div className={styles.reviewBox}>
        <div className={styles.reviewCard}>
          <p className={styles.reviewText}>A roadmap that fits your goals</p>
        </div>
        <img src={separationBar} />
        <div className={styles.reviewCard}>
          <p className={styles.reviewText}>Help you focus on what really matters</p>
        </div>
        <img src={separationBar} />
        <div className={styles.reviewCard}>
          <p className={styles.reviewText}>Clear, structured, and easy to follow</p>
        </div>
      </div>
    </div>
  );
}

export default BannerTextBlock;
