import styles from "./styles.module.css";
import playButton from "/src/assets/play-button.svg";

function VideoButton({ children }) {
  return (
    <button className={styles.buttonPlay}>
      <img className={styles.iconPlay} src={playButton} alt="play button" />
      {children}
    </button>
  );
}

export default VideoButton;
