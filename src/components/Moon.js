import { nanoid } from 'nanoid'
import React from 'react'

import moon from '../assets/moon.png'

export const Moon = () => {
  const id = nanoid(10)
  return <img alt="moon" src={moon} key={id} className="moon" />
}
