import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { Moon } from './Moon'
import { nanoid } from 'nanoid'
import  divider  from '../assets/lavender-divider.png'

export const MoonLevel = () => {
  const [level, setLevel] = useState(1)
  const id = nanoid(10)
  const match = useRouteMatch().url;
  const moons =  Array.from(Array(13), (moon, level) => <Moon id={level + 1} />)

  return (
    <article className='moon-levels' key={id}>
    <Link to={`${match}/${level}`} 
    onClick={()=>setLevel(level+1)}
    >
    Click Me!</Link>
    <img alt="a lavender line" className="moon-divider"src={divider}/>
        {moons}
    </article>
    )
}