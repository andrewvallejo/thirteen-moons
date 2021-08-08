/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { MoonMsgBar } from "./MoonMsgBar"


export const Creation = () =>  {
  const [talent, setTalent] = useState('')
  const [count, setCount] = useState(0)
  const [terms, setTerms] = useState('')

  return (
  <section className="creation-view">
    <MoonMsgBar />
      <form>

      </form>
    </section>
  )
}