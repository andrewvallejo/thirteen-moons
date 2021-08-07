import React from 'react'
import moonFace from '../assets/moon-face.png'

export const MoonMsgBar = () => {
  return (
    <article className="message-bar">
      <img alt="the face of the moon" src={moonFace} className='moon-face' />
      <blockquote className="dialog-container">
        <p className='dialog'>Choose your fate, Child.</p>
      </blockquote>
    </article>
  )
}