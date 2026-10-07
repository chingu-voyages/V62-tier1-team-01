import styles from "./styles.module.css";

/**
 * @param {import("react").PropsWithoutRef} props
 * @param {string} props.type - String including the name of the kind of notification, for example 'success', 'error'. Should be the same as the class name including background and text colors
 * @param {{display: boolean, message: string}} props.state - Object that includes whether to display the notification, and the message itself
 * @returns {Element} - Generic Notification component
 * 
 * @example
 * <Notification type="success" state={{display: true, message: "Success! Your path was saved"}}/>
 */
function Notification({type, state}){
    return (
        <div className={state.display ? `${styles["default"]} ${styles[`${type}`]}` : `${styles["default"]} ${styles[`${type}`]} ${styles["hide"]}`}>
            {state.message}
        </div>
    );
}

export default Notification;