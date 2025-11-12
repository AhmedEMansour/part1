import { useState } from 'react'
import './App.css'

const Statistics = ({
good, neutral, bad, total, average, positive
}) => {
  return(
    <div>
      <h2>statistics</h2>
      {isNaN(average)? <h3>No feedback given</h3>:
      <p>
        good {good} <br/>
        neutral {neutral} <br/>
        bad {bad} <br />
        all {total} <br />
        average {
          isNaN(average) ? 0 : average
        } <br />
        positive {
           isNaN(positive) ? 0 : positive.toFixed(13)
        } %
      </p>}
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }
  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
  }

  const total = good + neutral + bad
  const average = (good-bad)/total
  const positive = (good/total)*100
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
    </div>
  )
}

export default App