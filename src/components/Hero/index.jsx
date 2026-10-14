import styles from "./styles.module.css";
import separationBar from "/src/assets/separation-bar.svg";
import heroImg from "/src/assets/banner-img.svg";
import Button from "../Button";
import VideoButton from "../VideoButton";

function Hero({ onNextStep }) {

  return (
    <div className="container">
      <div className={styles["hero"]}>
        <div className={styles["content"]}>
          <div>
            <span className={styles["subtitle"]}>
              AI-POWERED LEARNING PATHS
            </span>
            <h1 className={styles["title"]}>
              From Curiosity
              <br />
              to Career.
            </h1>
            <p className={styles["description"]}>
              Turn your goals into a clear, step-by-step learning journey. Our
              AI analyzes your current level, identifies the most relevant
              skills, and builds a personalized roadmap to help you grow faster
              and with confidence—no more guessing what to learn next.
            </p>
          </div>

          <div className={styles["buttons"]}>
            <Button onClick={onNextStep}>
              <span>Generate your path</span>
            </Button>
            <VideoButton>
              <a href="#">Watch demo</a>
            </VideoButton>
          </div>

          <div className={styles["infos"]}>
            <div className={styles["info"]}>
              <p>A roadmap that fits your goals</p>
            </div>
            <img src={separationBar} />
            <div className={styles["info"]}>
              <p>Help you focus on what really matters</p>
            </div>
            <img src={separationBar} />
            <div className={styles["info"]}>
              <p>Clear, structured, and easy to follow</p>
            </div>
          </div>
        </div>

        <img className={styles["img"]} src={heroImg} alt="hero image" />
      </div>
    </div>
  );
}

export default Hero;
