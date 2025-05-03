import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// Method to control variable at each places without references:
let  [counter,setCounter] =useState(5)
  // let counter=5
  const addValue=()=>{
    console.log("Clicked",counter);
   if(counter<20){ counter=counter+1;
    setCounter(counter)
   }
  

  }

  return (
  <>
  <h1>Chai Aur Code</h1>
  <h2>Counter Value:{counter}</h2>
  <button
  onClick={addValue}>Add value{counter}</button>
  <button>Remove Value{counter}</button>
  </>
  )
}

export default App
