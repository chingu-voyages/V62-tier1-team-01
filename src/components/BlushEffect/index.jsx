import styles from "./styles.module.css";

function BlushEffect() {
  return (
    <>
      <div
        className={styles.blush}
        style={{
          backgroundColor: "#8BCBFF33",
          left: "64px",
          top: "84px",
          height: "356px",
          width: "356px",
        }}
      ></div>
      <div
        className={styles.blush}
        style={{
          backgroundColor: "#B7A1FF33",
          left: "128px",
          top: "252px",
          height: "446px",
          width: "446px",
        }}
      ></div>
      <div
        className={styles.blush}
        style={{
          backgroundColor: "#F1CFA940",
          left: "1020px",
          top: "0",
          height: "446px",
          width: "446px",
        }}
      ></div>
      <div
        className={styles.blush}
        style={{
          backgroundColor: "#FFB6D940",
          left: "960px",
          top: "297px",
          height: "446px",
          width: "446px",
        }}
      ></div>
    </>
  );
}

export default BlushEffect;
