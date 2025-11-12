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
        <tr>
        <td>{text}</td>
        <td>{value}</td>
        </tr>
  )
}

const Statistics = ({
good, neutral, bad, total, average, positive
}) => {
  return(
    <div>
      <h2>statistics</h2>
      {isNaN(average)? <h3>No feedback given</h3>:
      
        <table>
          <tbody>
        <StatisticLine text = "good" value = {good}/> 
        <StatisticLine text = "neutral" value = {neutral}/>  
        <StatisticLine text = "bad" value = {bad}/> 
        <StatisticLine text = "all" value = {total}/>  
        {
          isNaN(average) ? 
          <StatisticLine text = "average" value = "0" /> :
          <>
          <StatisticLine text = "average" value = {average.toFixed(3)}/> 
          <StatisticLine text = "positive" value = {positive.toFixed(1) + `%`}/> 
          </>
        }
        </tbody>
        </table>
      }
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