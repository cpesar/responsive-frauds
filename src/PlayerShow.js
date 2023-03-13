import React, { useState } from 'react'
import './PlayerShow.css'

import Aroid from './players/aroid.jpeg'
import BigHurt from './players/bighurt.jpeg'
import Charlie from './players/charliehustle.jpeg'
import Crush from './players/crusher.jpeg'
import Jose from './players/jose.jpeg'
import Raffy from './players/palmeiro.jpeg'
import Miggy from './players/tejada.jpeg'
import Sammy from './players/sammy.jpeg'
import BigSloppy from './players/bigsloppy.jpeg'
import ThumbsDown from './players/thumbsdown.jpeg'

const jpegMap = {
  Aroid,
  BigHurt,
  Charlie,
  Crush,
  Jose,
  Raffy,
  Miggy,
  Sammy,
  BigSloppy,
  ThumbsDown
}


export default function PlayerShow({ name }) {
  const [clicks, setClicks] = useState(0)

  const handleClick = () => {
    setClicks(clicks + 1)
  }


  return (
    <div className='player-show' onClick={handleClick}>
      <img className='player' alt="player" src={jpegMap[name]}></img>
      <img className='thumbs-down' alt="thumbsdown" src={ThumbsDown} style={{ width: 20 + 20 * clicks + 'px' }}></img>
    </div>
  )
}
