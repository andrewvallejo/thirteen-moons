import React, { useState } from "react"

import { DummyCard } from "./DummyCard"
import { MoonMsgBar } from "./MoonMsgBar"


export const Creation = () =>  {
  const [abrv, setAbrv] = useState('') 
  const [talent, setTalent] = useState('talent')
  const [terms, setTerms] = useState('Find space and meditate for')
  const [count, setCount] = useState('7')
  const [interval, setInterval] = useState('minutes')


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
        <label for="talent">Choose a talent</label> 
        <select 
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
        <label for='count'>Choose a number between 1 and 13.</label> 
        <input 
          id='count'
          type="range" 
          name="count"
          min="1" max="13"
          onChange={(event) => 
          setCount(event.target.value)}/>
        <label for='terms'>Write your terms.</label> 
        <input 
          id='terms'
          type="text"
          name="terms"
          placeholder="Enter your challenge here"
          onChange={(event) => 
          setTerms(event.target.value)} />
        <label for='interval'>Choose an interval.</label> 
        <select 
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
      </form>
      <button onChange={(event) => onHandle(event)}>Submit.</button>
    <button>I'm content</button>
    </section>


  )
}