import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserInputForm from "../UserInputForm";
// import LearningPathResult from "../LearningPathResult";
import LandingPage from "../LandingPage";
import Button from "../Button";
import styles from "./styles.module.css";
import { DELETED_MSG, ERROR_MSG, INITIAL_USER_PROMPT, KEY_AI_PATH, KEY_USER_ANSWER, SAVED_MSG } from "../../constants";
import { saveItem, removeItem, getUserPrompt, sendRequestToApi, getJSON, checkItemExists } from "../../services/api";
import { LearningPathContext } from "../../App";

function AiGeneratedPath() {
  const {
    aiAnswer,
    setAiAnswer, 
    userPrompt, 
    setUserPrompt
  } = useContext(LearningPathContext);
  const navigate = useNavigate();

  // const [aiAnswer, setAiAnswer] = useState(getJSON(KEY_AI_PATH));
  // const [userPrompt, setUserPrompt] = useState(getJSON(KEY_USER_ANSWER) || INITIAL_USER_PROMPT);
  const [isWaiting, setIsWaiting] = useState(false);
  const [error, setError] = useState({ display: false, message: ERROR_MSG });
  const [step, setStep] = useState(0);
  // const [inLocalStorage, setInLocalStorage] = useState(checkItemExists(KEY_AI_PATH));
  // const [pathNotification, setPathNotification] = useState({display: false, message: inLocalStorage ? DELETED_MSG : SAVED_MSG});

  async function handleSubmit(e) {
    e.preventDefault();

    setAiAnswer("");
    setIsWaiting(true);

    const contextInfo = getUserPrompt(userPrompt);

    try {
      const result = await sendRequestToApi(contextInfo);
      setAiAnswer(JSON.parse(result.response.text()));
      navigate("/my-learning");
    } catch (err) {
      handleError();
    }
    setIsWaiting(false);
  }

  function handleError() {
    setError((prev) => ({ ...prev, display: true }));
    setTimeout(() => setError((prev) => ({ ...prev, display: false })), 2000);
  }

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
          <Button type="button" onClick={() => navigate("/")} marginRight={"8px"}>
            Previous
          </Button>
          {aiAnswer === "" ? null : (
            <Button type="button" onClick={() => navigate("/my-learning")} marginRight={"8px"}>
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

export default AiGeneratedPath;
