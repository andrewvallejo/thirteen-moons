import React, { useState } from "react"
import { Link } from "react-router-dom"
import { DummyCard } from "./DummyCard"
import { MoonMsgBar } from "./MoonMsgBar"
import { Talents } from './Talents'


export const Creation = () =>  {
  const [abrv, setAbrv] = useState('') 
  const [talent, setTalent] = useState('Example')
  const [terms, setTerms] = useState('Your terms are an activity that difficulty depends your chosen number')
  const [count, setCount] = useState('∞')
  const [interval, setInterval] = useState('Pair the number with the correct ilk')


  const uniqueCard = {
    abrv: abrv,
    talent: talent ,
    terms: terms ,
    count: count,
    interval: interval
  }

  const onHandle = (event) => {
    event.preventDefault()
    setAbrv(talent[0] + count)
  }
  
  return (
    <section className="creation-view">
      <DummyCard card={uniqueCard} />   
      <MoonMsgBar  />
      <form className="creation-form">
        <label htmlFor="talent">Choose a talent</label> 
        <select 
          className='talent choice'
          id='talent'
          name='talent'
          value={talent} 
          onChange={(event) => 
          setTalent(event.target.value)}>
          <option name="mind">Mind</option>
          <option name="spirit">Spirit</option>
          <option name="wisdom">Wisdom</option>
          <option name="vitality">Vitality</option>
        </select>
        <label htmlFor='count'>Choose a number between 1 and 13.</label> 
        <input 
          className='count choice'       
          id='count'
          type="range" 
          name="count"
          min="1" max="13"
          onChange={(event) => 
          setCount(event.target.value)}/>
        <label htmlFor='terms'>Write your terms.</label> 
        <input 
          className='terms choice'
          id='terms'
          type="text"
          name="terms"
          placeholder="Enter your challenge here"
          onChange={(event) => 
          setTerms(event.target.value)} />
        <label htmlFor='interval'>Choose an interval.</label> 
        <select 
          className='interval choice'
          id='interval'
          value={interval} 
          onChange={(event) => 
          setInterval(event.target.value)}>
          <option name="minutes">minutes</option>
          <option name="repetition">repetitions</option>
          <option name="counts">counts</option>
          <option name="pages">pages</option>
          <option name="chapter">chapters</option>
        </select>
      <button className="create-button" onChange={(event) => onHandle(event)}>Create a  moon card.</button>
      <Link className="start-button" to="/lunares/quarum/">I'm content</Link>
      </form>
      <Talents />
    </section>


  )
}