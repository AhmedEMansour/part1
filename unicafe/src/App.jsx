import { useState } from 'react'
import './App.css'

const Button = ({
  onClick, text
}) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({
  text, value
}) => {
  return(
    <>{text} {value}</>
  )
}

const Statistics = ({
good, neutral, bad, total, average, positive
}) => {
  return(
    <div>
      <h2>statistics</h2>
      {isNaN(average)? <h3>No feedback given</h3>:
      <p>
        <StatisticLine text = "good" value = {good}/> <br/>
        <StatisticLine text = "neutral" value = {neutral}/>  <br/>
        <StatisticLine text = "bad" value = {bad}/>  <br />
        <StatisticLine text = "all" value = {total}/>  <br />
        {
          isNaN(average) ? 
          <StatisticLine text = "average" value = "0" /> :
          <>
          <StatisticLine text = "average" value = {average}/> <br/>
          <StatisticLine text = "positive" value = {positive.toFixed(13)}/> %
          </>
        }
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
      <Button onClick={handleGood} text="good"/>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
    </div>
  )
}

export default App