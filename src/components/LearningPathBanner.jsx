// todo
function LearningPathBanner({ step, setStep }) {
  return (
    <div>
      <h3>Let's build your path</h3>
      <div>
        <h5>What's your goal?</h5>
        <ul>
          <li>Get a job</li>
          <li>Level up my skills</li>
          <li>Build a project</li>
          <li>Explore out of my curiosity</li>
        </ul>
      </div>
      <div>
        <h5>Which field are you most interested in?</h5>
        <ul>
          <li>Front-end Development</li>
          <li>Back-end Development</li>
          <li>Data Science</li>
          <li>UI/UX Design</li>
        </ul>
      </div>
      <div>
        <button onClick={() => setStep(step + 1)}>Next</button>
      </div>
    </div>
  );
}

export default LearningPathBanner;
