import React, { useState } from "react"
import { Link } from "react-router-dom"
import { DummyCard } from "./DummyCard"
import { MoonMsgBar } from "./MoonMsgBar"
import { Talents } from './Talents'
import { swapCard } from "../utility/util"


export const Creation = () =>  {
  const [code, setCode] = useState('') 
  const [talent, setTalent] = useState('')
  const [terms, setTerms] = useState('')
  const [count, setCount] = useState(0)
  const [intervals, setIntervals] = useState('')


  const uniqueCard = {
    code: code,
    talent: talent ,
    terms: terms ,
    count: count,
    intervals: intervals
  }

  const onHandle = (event) => {
    event.preventDefault()
      validateForm()
  }

  const validateForm = () => {
   return  !talent ? setTalent('choose talent'): 
    !terms ? setTerms('Your terms are the activity you want to do') : 
    !count ? setCount('∞'):
    !intervals ? setIntervals('Choose interval') : submitCard()
  }

  const submitCard = () => {
    setCode(uniqueCard.talent[0].toLowerCase() + count)
    updateCardValues()
    updateCardValues()
    swapCard(uniqueCard)
    resetForm()
    setTalent('You did it!')
    setTerms('You made a moon card!')
    setTimeout(() => {
      setTalent('')
      setTerms('')
  }, 1500)
  }

  const updateCardValues = () => {
    uniqueCard.code = code
    uniqueCard.talent = talent
    uniqueCard.terms = terms
    uniqueCard.count= count
    uniqueCard.intervals= intervals
  }

  const resetForm = () => {
    setCode('')
    setTalent('')
    setTerms('')
    setCount('')
    setIntervals('')
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
          onChange={(event) => {
          event.preventDefault()
          setTalent(event.target.value)}} >
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
          onChange={(event) => {
          event.preventDefault()
          setCount(event.target.value)}} />
        <label htmlFor='terms'>Write your terms.</label> 
        <input 
          className='terms choice'
          id='terms'
          type="text"
          name="terms"
          placeholder="Enter your challenge here"
          onChange={(event) => {
          event.preventDefault()
          setTerms(event.target.value)}} />
        <label htmlFor='interval'>Choose an interval.</label> 
        <select 
          className='interval choice'
          id='interval'
          value={intervals} 
          onChange={(event) => {
          event.preventDefault()
          setIntervals(event.target.value)}} >
          <option name="minutes">minutes</option>
          <option name="repetition">repetitions</option>
          <option name="counts">counts</option>
          <option name="pages">pages</option>
          <option name="chapter">chapters</option>
        </select>
      <button className="create-button" type="submit" onClick={(event) => onHandle(event)}>Create a  moon card.</button>
      <Link className="start-button" to="/lunares/quarum/">I'm content</Link>
      </form>
      <Talents />
    </section>


  )
}