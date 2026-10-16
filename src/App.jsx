import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import AiGeneratedPath from "./components/AiGeneratedPath";
import LearningPathResult from "./components/LearningPathResult";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { DELETED_MSG, INITIAL_USER_PROMPT, KEY_AI_PATH, KEY_USER_ANSWER, SAVED_MSG } from "./constants";
import { saveItem, removeItem, getJSON, checkItemExists } from "./services/api";

export const LearningPathContext = createContext(null);

function App() {
  const [aiAnswer, setAiAnswer] = useState(getJSON(KEY_AI_PATH));
  const [userPrompt, setUserPrompt] = useState(getJSON(KEY_USER_ANSWER) || INITIAL_USER_PROMPT);
  const [inLocalStorage, setInLocalStorage] = useState(checkItemExists(KEY_AI_PATH));
  const [pathNotification, setPathNotification] = useState({display: false, message: inLocalStorage ? DELETED_MSG : SAVED_MSG});

  function removeFromLocalStorage() {
    removeItem(KEY_AI_PATH);
    removeItem(KEY_USER_ANSWER);
    setPathNotification({
      display: true,
      message: DELETED_MSG,
    });
    setTimeout(() => {
      setPathNotification((prev) => ({ ...prev, display: false }));
      setInLocalStorage(false);
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
      setPathNotification((prev) => ({ ...prev, display: false }));
      setInLocalStorage(true);
    }, 2000);

    console.log("Saved to local storage!");
  }

   // Save learning path to localStorage and take screenshot
  function savePath() {
    saveToLocalStorage();
    return 0;
  }

  const learningPathState = {
    aiAnswer, setAiAnswer, userPrompt, setUserPrompt,
    inLocalStorage, setInLocalStorage, pathNotification, setPathNotification,
    removeFromLocalStorage, savePath
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <LearningPathContext.Provider value={learningPathState}>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/career-quiz" element={<AiGeneratedPath/>}/>
            <Route path="/my-learning" element={<LearningPathResult/>}/>
          </Routes>
          </LearningPathContext.Provider>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
