import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'
function App() {
  const  [count,setcount]  =  useState(0);

  function handleClick(){
    setcount(count+1);
  }

  return (
   <div>
    <Button handleClick = {handleClick} text="click me">
      <h2>{count}</h2>
    </Button>

    {/* <Card name="Rehan Baig">
      <h2>A General Greeting</h2>
      <p>Hello Everyone</p>
      <p>How are you guys doing</p>
    </Card>
    <Card>
      hello jee kaise ho..
    </Card> */}
   </div>
  )
}

export default App
