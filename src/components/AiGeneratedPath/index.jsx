import { useState } from "react";
import UserInputForm from "../UserInputForm";
import LearningPathResult from "../LearningPathResult";
import LandingPage from "../LandingPage";
import Button from "../Button";
import styles from "./styles.module.css";
import { DELETED_MSG, ERROR_MSG, INITIAL_USER_PROMPT, KEY_AI_PATH, KEY_USER_ANSWER, SAVED_MSG } from "../../constants";
import { saveItem, removeItem, getUserPrompt, sendRequestToApi, getJSON, checkItemExists } from "../../services/api";

function AiGeneratedPath() {
  const [aiAnswer, setAiAnswer] = useState(getJSON(KEY_AI_PATH));
  const [userPrompt, setUserPrompt] = useState(getJSON(KEY_USER_ANSWER) || INITIAL_USER_PROMPT);
  const [isWaiting, setIsWaiting] = useState(false);
  const [error, setError] = useState({ display: false, message: "" });
  const [step, setStep] = useState(0);
  const [inLocalStorage, setInLocalStorage] = useState(checkItemExists(KEY_AI_PATH));
  const [pathNotification, setPathNotification] = useState({display: false, message: inLocalStorage ? DELETED_MSG : SAVED_MSG});

  async function handleSubmit(e) {
    e.preventDefault();

    setAiAnswer("");
    setIsWaiting(true);

    const contextInfo = getUserPrompt(userPrompt);

    try {
      const result = await sendRequestToApi(contextInfo);
      setAiAnswer(JSON.parse(result.response.text()));
      // console.log(result.response.text());
      setStep(2);
    } catch (err) {
      handleError();
    }
    setIsWaiting(false);
  }

  function handleError() {
    setError({
      display: true,
      message: ERROR_MSG,
    });
    setTimeout(() => setError({ display: false, message: ERROR_MSG }), 2000);
  }

  function handleNext() {
    if (step === 0 && inLocalStorage) {
      setStep(2);
    } else {
      setStep((s) => s + 1);
    }
  }

  function handlePrevious() {
    setStep((s) => s - 1);
  }

  function removeFromLocalStorage() {
    removeItem(KEY_AI_PATH);
    removeItem(KEY_USER_ANSWER);
    setPathNotification({
      display: true,
      message: DELETED_MSG,
    });
    setTimeout(() => {
      setPathNotification((prev) => {
        return { ...prev, display: false };
      });
      setInLocalStorage(false);
      // console.log(pathNotification);
    }, 2000);
    console.log("Removed from local storage!");
  }

  // Save learning path to localStorage
  function saveToLocalStorage() {
    saveItem(KEY_AI_PATH, aiAnswer);
    saveItem(KEY_USER_ANSWER, userPrompt);
    setPathNotification({
      display: true,
      message: SAVED_MSG,
    });
    setTimeout(() => {
      setPathNotification((prev) => {
        return { ...prev, display: false };
      });
      setInLocalStorage(true);
      // console.log(pathNotification);
    }, 2000);

    console.log("Saved to local storage!");
  }

  //todo
  function takeScreenshot() {
    return 0;
  }

  // Save learning path to localStorage and take screenshot
  function savePath() {
    saveToLocalStorage();
    takeScreenshot();
    return 0;
  }

  if (step === 0) {
    return <LandingPage onNextStep={handleNext} />;
  }

  if (step === 1) {
    return (
      <div className="container">
        <UserInputForm
          onSubmit={handleSubmit}
          userPrompt={userPrompt}
          setUserPrompt={setUserPrompt}
          aiAnswer={aiAnswer}
          isWaiting={isWaiting}
          error={error}
        >
          <>
            <Button onClick={handlePrevious} marginRight={"8px"}>
              Previous
            </Button>
            {aiAnswer === "" ? null : (
              <Button onClick={handleNext} marginRight={"8px"}>
                Next
              </Button>
            )}
          </>
        </UserInputForm>
        <div className={isWaiting ? styles["loadingArea"] : styles["hide"]}>
          <div className="loader"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <LearningPathResult
        handlePrevious={handlePrevious}
        aiAnswer={aiAnswer}
        userPrompt={userPrompt}
        savePath={savePath}
        deletePath={removeFromLocalStorage}
        notificationState={pathNotification}
        inLocalStorage={inLocalStorage}
      />
    </div>
  );
}

export default AiGeneratedPath;
