/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { MoonMsgBar } from "./MoonMsgBar"


export const Creation = () =>  {
  const [talent, setTalent] = useState('')
  const [count, setCount] = useState(0)
  const [terms, setTerms] = useState('')

  const onChange = (event) => {
    event.preventDefault()
    setTalent(event.target.value)
    setCount(event.target.value)
    setTerms(event.target.value)
  }

  return (
  <section className="creation-view">

    <MoonMsgBar />
      <form className="creation-form">
        <select value={talent} onChange={onChange}>
          <option name="mind">Mind</option>
          <option name="spirit">Spirit</option>
          <option name="wisdom">Wisdom</option>
          <option name="Vitality">Vitality</option>
        </select>
        
      </form>
    </section>
  )
}