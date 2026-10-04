import styles from "./styles.module.css";

function Notification({children, type, state}){
    return (
        <div className={state.display ? `${styles["default"]} ${styles[`${type}`]}` : `${styles["default"]} ${styles[`${type}`]} ${styles["hide"]}`}>
            {children}
        </div>
    );
}

export default Notification;