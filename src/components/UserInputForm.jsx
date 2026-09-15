
// todo
function UserInputForm({ onSubmit, career, setCareer, timeCommitment, setTimeCommitment, skillLevel, setSkillLevel }) {

  return (
    <form onSubmit={onSubmit}>
      <label>Your career goal: </label>
      <input type="text" value={career} onChange={e => setCareer(e.target.value)} />
      <label>Your time commitment (hours per week): </label>
      <input type="number" value={timeCommitment} onChange={e => setTimeCommitment(Number(e.target.value))}/>
      <label>Your current skill level: </label>
      <select value={skillLevel} onChange={e => setSkillLevel(e.target.value)}>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
      <button>Submit</button>
    </form>
  )
}

export default UserInputForm