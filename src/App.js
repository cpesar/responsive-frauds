import React, { useState } from 'react'
import './App.css'
import PlayerShow from './PlayerShow'

function getRandomPlayer() {
  const players = [
    'Aroid',
    'BigHurt',
    'Charlie',
    'Crush',
    'Jose',
    'Raffy',
    'Miggy',
    'Sammy',
    'BigSloppy',
    'ThumbsDown'
  ]

  //Generates a random value from the players array
  // Math.random() will return a decimal
  // Math.floor() will return an integer
  return players[Math.floor(Math.random() * players.length)]
}
// Make sure you call the function
// console.log(getRandomPlayer())


function App() {
  const [players, setPlayers] = useState([])

  const handleClick = () => {
    setPlayers([...players, getRandomPlayer()])
  }

  // The map function will add each element from the array and return a brand new array
  const renderedPlayers = players.map((player, index) => {
    return (
      <PlayerShow name={player} key={index} />
    )
  })

  //------ renderedPlayers will be:
  // const renderedPlayers = [
  //   <PlayerShow name={players[0]}/>
  //   <PlayerShow name={players[1]}/>
  //   <PlayerShow name={players[2]}/>
  //   <PlayerShow name={players[3]}/>
  //   <PlayerShow name={players[4]}/>
  //   <PlayerShow name={players[5]}/>
  //   <PlayerShow name={players[6]}/>
  // ]



  return (
    <div className='app'>
      <button onClick={handleClick}>Add Player</button>
      <div className='player-list'>{renderedPlayers}</div>
    </div>
  )
}

export default App