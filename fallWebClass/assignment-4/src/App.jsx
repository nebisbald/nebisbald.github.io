import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Completed from './Completed'


export default function App() {


  return (
    <>
      <Counter counterName="cut triangles: " />
      <Completed />
      <Counter counterName="sewn squares: " />
      <Completed />
      <Counter counterName="sewn rows: "/>
      <Completed />
    </>
  )
}


