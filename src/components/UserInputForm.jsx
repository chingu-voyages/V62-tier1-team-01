// todo
// bug: user can delete timeCommitment value, zero should not be allowed
function UserInputForm({ onSubmit, userPrompt, setUserPrompt }) {
  function setCareer(data) {
    setUserPrompt({ ...userPrompt, career: data });
  }

  function setTimeCommitment(data) {
    setUserPrompt({ ...userPrompt, timeCommitment: data });
  }

  function setSkillLevel(data) {
    setUserPrompt({ ...userPrompt, skillLevel: data });
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Your career goal: </label>
      <input
        type="text"
        value={userPrompt.career}
        onChange={(e) => setCareer(e.target.value)}
      />
      <label>Your time commitment (hours per week): </label>
      <input
        type="number"
        min="1"
        value={userPrompt.timeCommitment}
        onChange={(e) => setTimeCommitment(Number(e.target.value))}
      />
      <label>Your current skill level: </label>
      <select
        value={userPrompt.skillLevel}
        onChange={(e) => setSkillLevel(e.target.value)}
      >
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
      <button>Submit</button>
    </form>
  );
}

export default UserInputForm;
