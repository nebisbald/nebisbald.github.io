import { useState } from 'react'

export default function Counter({counterName}) {

    const [counter, setCounter] = useState(0)

    function addToCount() {
      setCounter(counter + 1)
    }

    return (
      <>
        <h2>{counterName}{counter}</h2>
        <button onClick={addToCount}>Add 1</button>
      </>
    )
  }