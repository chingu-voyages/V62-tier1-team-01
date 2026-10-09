import UserInputForm from "../UserInputForm";
import LearningPathResult from "../LearningPathResult";
import LandingPage from "../LandingPage";
import Button from "../Button";
import styles from "./styles.module.css";
import {
  saveItem,
  removeItem,
  getUserPrompt,
  sendRequestToApi,
  useApiState
} from "../../services/api";

function AiGeneratedPath() {
  const { 
    aiAnswer, 
    setAiAnswer, 
    userPrompt, 
    setUserPrompt, 
    isWaiting, 
    setIsWaiting, 
    error, 
    setError, 
    step, 
    setStep,
    inLocalStorage,
    setInLocalStorage, 
    pathNotification, 
    setPathNotification 
  } = useApiState();

  async function handleSubmit(e) {
    e.preventDefault();

    setAiAnswer("");
    setIsWaiting(true);

    const contextInfo = getUserPrompt(userPrompt);

    try {
      const result = await sendRequestToApi(contextInfo);
      setAiAnswer(JSON.parse(result.response.text()));
      setStep(2);
    } catch (err) {
      handleError();
    }
    setIsWaiting(false);
  }

  function handleError() {
    setError({
      display: true,
      message: "Error while generating your leaning path...",
    });
    setTimeout(() => setError({ display: false, message: "" }), 2000);
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
    removeItem("nexa-ai-generated-learning-path");
    removeItem("nexa-user-answers");
    setPathNotification({
      display: true,
      message: "Your path has been deleted from storage 🗑️",
    });
    setTimeout(() => {
      setPathNotification((prev) => {
        return { ...prev, display: false };
      });
      setInLocalStorage(false);
    }, 2000);
    console.log("Removed from local storage!");
  }

  function saveToLocalStorage() {
    saveItem("nexa-ai-generated-learning-path", aiAnswer);
    saveItem("nexa-user-answers", userPrompt);
    setPathNotification({
      display: true,
      message: "Success! Your path was saved 🎉",
    });
    setTimeout(() => {
      setPathNotification((prev) => {
        return { ...prev, display: false };
      });
      setInLocalStorage(true);
    }, 2000);

    console.log("Saved to local storage!");
  }

  //todo
  function takeScreenshot() {
    return 0;
  }

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
