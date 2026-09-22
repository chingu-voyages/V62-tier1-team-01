import { useState } from "react";
import styles from "./styles.module.css";
import playButton from "/src/assets/play-button.svg";

function VideoButton({ children, onOpen }) {

  return (
    <button className={styles.buttonPlay} onClick={onOpen}>
      <img className={styles.iconPlay} src={playButton} alt="play button" />
      {children}
    </button>
  )
}

export default VideoButton;