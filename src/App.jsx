import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import AiGeneratedPath from "./components/AiGeneratedPath";
import LearningPathResult from "./components/LearningPathResult";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { DELETED_MSG, ERROR_MSG, INITIAL_USER_PROMPT, KEY_AI_PATH, KEY_USER_ANSWER, SAVED_MSG } from "./constants";
import { saveItem, removeItem, getUserPrompt, sendRequestToApi, getJSON, checkItemExists } from "./services/api";

export const LearningPathContext = createContext(null);

function App() {
  const [aiAnswer, setAiAnswer] = useState(getJSON(KEY_AI_PATH));
  const [userPrompt, setUserPrompt] = useState(getJSON(KEY_USER_ANSWER) || INITIAL_USER_PROMPT);
  const [inLocalStorage, setInLocalStorage] = useState(checkItemExists(KEY_AI_PATH));
  const [pathNotification, setPathNotification] = useState({display: false, message: inLocalStorage ? DELETED_MSG : SAVED_MSG});

  const learningPathState = {
    aiAnswer, setAiAnswer, userPrompt, setUserPrompt,
    inLocalStorage, setInLocalStorage, pathNotification, setPathNotification
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <LearningPathContext.Provider value={learningPathState}>
          <Routes>
            <Route path="/" element={<AiGeneratedPath/>}></Route>
            <Route path="/my-learning" element={<LearningPathResult/>}></Route>
          </Routes>
          </LearningPathContext.Provider>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
