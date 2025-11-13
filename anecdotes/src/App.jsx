import { useState } from 'react'
import './App.css'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const handleRandom = (array) => {
    const randomItem = () => Math.floor(Math.random() * array.length)
    //console.log(randomItem);
    randomItem === selected ? handleRandom() : setSelected(randomItem)
  }
  const [votes, setVotes] = useState(anecdotes.map(()=> 0))

  const handleVotes = () => {
    const addVote = votes.map((vote, index) => index === selected ? vote += 1 : vote )
    setVotes(addVote)
    //console.log(votes); 
  }
  
  const maxVotes = votes.reduce((a, b)=> a > b ? a : b)
  //console.log(maxVotes);
  const voteIndex = votes.findIndex(vote => vote === maxVotes)
  //console.log(voteIndex);
  
  const anecdoteMostVotes = anecdotes[voteIndex]
  //console.log(anecdoteMostVotes);
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
      {anecdotes[selected]} <br />
      has {votes[selected]} votes
      </p>
      <button onClick={handleVotes}>Vote</button>
      <button className='next' onClick={() => handleRandom(anecdotes)}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>
        {anecdoteMostVotes} <br />
        has {maxVotes} votes
      </p>

    </div>
  )
}

export default App