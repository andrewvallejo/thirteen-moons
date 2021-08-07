import React, { useState } from 'react'
import { Moon } from './Moon'
import { nanoid } from 'nanoid'
import  divider  from '../assets/lavender-divider.png'

export const MoonLevel = () => {
  const id = nanoid(10)
  const moons =  Array.from(Array(13), moon => <Moon />)

  
  return (
    <article className='moon-levels' key={id}>
    <img alt="a lavender line" className="moon-divider"src={divider}/>
        {moons}
    </article>
    )
}