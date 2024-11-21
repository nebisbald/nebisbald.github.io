import EffectExamples from './EffectExamples'
import RefVsState from './RefVsState'
import StopWatch from './stopwatch'
import WidthOfElement from './WidthOfElement'
import { useState } from 'react'

export default function App(){
  
  const [ showEffectExamples, setShowEffectExamples ] = useState(true)
  /*
  let effectExamples = null;

  if (showEffectExamples) {
    effectExamples = <EffectExamples />
  }
    */
  

  return (
    <>
    <RefVsState />
    <br />
    <br />
    <StopWatch />
    <br />
    <br />
    <WidthOfElement />
    <br />
    <br />
    <button onClick={() => setShowEffectExamples(e => !e)}>Show effect examples</button>
    <br />
    {/*showEffectExamples ? <EffectExamples /> : null*/}
    { showEffectExamples && <EffectExamples /> }
    </>
  )
}