import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import UserInputForm from "../UserInputForm";
import LearningPathResult from "../LearningPathResult";
import LandingPage from "../LandingPage";
import { getItem, removeItem, getJson } from "../../services/api";

const initialState = {
  career: "",
  skillLevel: "",
  timeCommitment: 1,
};

function AiGeneratedPath() {
  const [aiAnswer, setAiAnswer] = useState(getJson("nexa-ai-generated-learning-path"));
  const [userPrompt, setUserPrompt] = useState(getJson("nexa-user-answers") || initialState);
  const [isWaiting, setIsWaiting] = useState(false);
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  // const [error, setError] = useState(false);
  const [inLocalStorage, setInLocalStorage] = useState(getItem("nexa-ai-generated-learning-path"));

  async function handleSubmit(e) {
    e.preventDefault();

    setAiAnswer("");
    setIsWaiting(true);

    const contextInfo = `
      You are an AI Career Path Generator.

      1. Your role is to transform a user's career goal into a clear, personalized, step-by-step learning journey.

      2. This is a web application that helps users understand what to learn next, removing guesswork by providing a tailored path based on their current skill level and desired career.

      3. The user's career goal is: ${userPrompt.career}
         The user's current skill level is: ${userPrompt.skillLevel}
         The user time commitment (hours per week) is: ${userPrompt.timeCommitment}

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
      setSubmitted(true);

      // if the learning path is sucessfully generated, then step = 2 because thats the result page number
      setStep(2);
    } catch (err) {
      alert("Error while generating content, please try again later");
      // setError(true);
      setSubmitted(false);
    }
    setIsWaiting(false);
  }

  function handleNext() {
    setStep((s) => s + 1);
  }

  function handlePrevious() {
    setStep((s) => s - 1);
  }

  function removeFromLocalStorage() {
    removeItem("nexa-ai-generated-learning-path");
    removeItem("nexa-user-answers");
    setInLocalStorage(false);
    console.log("Removed from local storage!");
  }

  function resetForm() {
    // setUserPrompt({
    //   career: "",
    //   skillLevel: "",
    //   timeCommitment: 1,
    // });
    removeFromLocalStorage();
    setSubmitted(false);
    // setError(false);
  }

  if (step === 0) {
    return <LandingPage onNextStep={handleNext} />;
  }

  // @francisco's suggestion
  if (step === 1) {
    return (
      <>
        <div>
          {(inLocalStorage) ? "You have 1 Learning Path saved in our local storage!" : null}
          <UserInputForm
            onSubmit={handleSubmit}
            userPrompt={userPrompt}
            setUserPrompt={setUserPrompt}
          />
          {isWaiting &&
            <div className="loader"></div>
          }
        </div>
        <button onClick={handlePrevious}>Previous</button>
        {(inLocalStorage) && <button onClick={handleNext}>Next</button>}
      </>
    );
  }

  return (
    <>
    <LearningPathResult
      resetForm={resetForm}
      aiAnswer={aiAnswer}
      userPrompt={userPrompt}
      setInLocalStorage={setInLocalStorage}
      />
      <button onClick={handlePrevious}>Previous</button>
    </>
  );


  // @winona's code
  /**

  return (
    <div>
      <div>
        {(!submitted && !inLocalStorage) &&
          <>
            <UserInputForm
              onSubmit={handleSubmit}
              userPrompt={userPrompt}
              setUserPrompt={setUserPrompt}
            />
            {isWaiting &&
              <div className="loader"></div>
            }
          </>
        }
        {(submitted || inLocalStorage) &&
          <LearningPathResult
            resetForm={resetForm}
            aiAnswer={aiAnswer}
            userPrompt={userPrompt}
            setInLocalStorage={setInLocalStorage}
          />
        }
      </div>
      <button onClick={handlePrevious}>Previous</button>
    </div>
  );

  */
}

export default AiGeneratedPath;
