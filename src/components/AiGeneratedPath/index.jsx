import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import UserInputForm from "../UserInputForm";
import LearningPathResult from "../LearningPathResult";
import LandingPage from "../LandingPage";
import Button from "../Button";
import styles from "./styles.module.css";
import { getJSON, saveItem, checkItemExists, removeItem } from "../../services/api";

const initialState = {
  career: "Front-end Development",
  skills: "HTML, CSS, JavaScript",
  experienceLevel: "Beginner",
  timeCommitment: "Less than 3 hrs",
};

function AiGeneratedPath() {
  const [aiAnswer, setAiAnswer] = useState(getJSON("nexa-ai-generated-learning-path") || "");
  const [userPrompt, setUserPrompt] = useState(getJSON("nexa-user-answers") || initialUserPrompt);
  const [isWaiting, setIsWaiting] = useState(false);
  const [error, setError] = useState({ display: false, message: "" });
  const [step, setStep] = useState(0);
  // const [submitted, setSubmitted] = useState(false);
  // const [error, setError] = useState(false);
  const [inLocalStorage, setInLocalStorage] = useState(checkItemExists("nexa-ai-generated-learning-path"));
  const [pathNotification, setPathNotification] = useState({display: false, message: "Success! Your path was saved 🎉"});

  async function handleSubmit(e) {
    e.preventDefault();

    setAiAnswer("");
    setIsWaiting(true);

    const contextInfo = `
      You are an AI Career Path Generator.

      1. Your role is to transform a user's career goal into a clear, personalized, step-by-step learning journey.

      2. This is a web application that helps users understand what to learn next, removing guesswork by providing a tailored path based on their current skill level and desired career.

      3. The user's career goal is: ${userPrompt.career}
         The user's background and existing skills are: ${userPrompt.skills}
         The user's current skill level is: ${userPrompt.experienceLevel}
         The user time commitment is: ${userPrompt.timeCommitment} per week

      4. Generate a structured learning path that:
        - Is practical and actionable
        - Progresses step by step from the user's current level and based on his weekly commitment
        - Includes relevant skills, tools, and technologies
        - Is aligned with real-world job requirements

      5. If the user input is not a valid career goal, ask the user to reformulate the request.

      6. Output format:
        - Return a list of JSON objects with title, description, and time estimate in hours (to complete the task)
        - Do not return any other text except the JSON
    `;

    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({
        model: "gemini-3.1-flash-lite",
      });
      const result = await model.generateContent(contextInfo);

      setAiAnswer(JSON.parse(result.response.text()));
      // console.log(result.response.text());
      setStep(2);
      // setSubmitted(true);
    } catch (err) {
      handleError();
      // setError(true);
      // setSubmitted(false);
    }
    setIsWaiting(false);
  }

  function handleError(err) {
    setError({ display: true, message: "Error while generating your leaning path..." });
    setTimeout(() => setError({ display: false, message: "" }), 2000);
  }

  function handleNext() {
    if (step === 0 && inLocalStorage) {
      setStep(2);
    } else{
      setStep((s) => s + 1);
    }
  }

  function handlePrevious() {
    setStep((s) => s - 1);
  }

  function removeFromLocalStorage(){
    removeItem("nexa-ai-generated-learning-path");
    removeItem("nexa-user-answers");
    setInLocalStorage(false);
    console.log("Removed from local storage!");
  }

  function resetForm(){
    // setUserPrompt({
    //   career: "",
    //   skillLevel: "",
    //   timeCommitment: 1,
    // });
    removeFromLocalStorage();
    // setSubmitted(false);
    handlePrevious();
    // setError(false);
  }

  // Save learning path to localStorage
  function saveToLocalStorage() {
    saveItem("nexa-ai-generated-learning-path", aiAnswer);
    saveItem("nexa-user-answers", userPrompt);
    setInLocalStorage(true);
    setPathNotification(prev => { 
      console.log({...prev, display: true});
      return {...prev, display: true};
    });
    setTimeout(() => {
      setPathNotification(prev => { return {...prev, display: false}});
      console.log(pathNotification);
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
        resetForm={resetForm}
        aiAnswer={aiAnswer} 
        userPrompt={userPrompt}
        savePath={savePath}
        notificationState={pathNotification}
      />
    </div>
  );
}

export default AiGeneratedPath;
