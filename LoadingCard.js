import React from 'react'
import { nanoid } from 'nanoid'

export const LoadingCard = ({draw}) => {
  const id = nanoid(10)

  const loadCards = Array.from(Array(4), (() =>   
  <article className='loading-card' />
  ))
  return loadCards.map(() => {
  let count = 0
  count++
  if (count === 4) draw()
  return (
    <article className='loading-card' key={id}/>
    )
  })
}