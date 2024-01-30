import React from 'react'
import { useState } from 'react'

const Addition = () => {
  let [counter, setCounter] = useState(0)
  // let counter = 5;
  const addvalue = () => {
    if (counter === 20) {
      return setCounter(0)
    }
    else {
      counter = counter + 1;
      setCounter(counter)
    }
  }
  const removevalue = () => {
    if (!(counter > 0)) {
      return setCounter(0)
    } else {
      counter = counter - 1;
      setCounter(counter)
    }
  }

  return (
    <>
      <div className="container bg-green-300 text-center justify-center font-bold" >
        <h1 > React with Rajneesh</h1>
        <h3> Counter value {counter}</h3>
        <button onClick={addvalue}> Add Value</button>
        <br />

        <button style={{ background: "white" }} onClick={removevalue}> Remove Value</button>
      </div>
      <Card username=" Rajneesh Kumar" btnText="click me" />


    </>
  )
}

export default Addition
