import { useState } from 'react'
import './App.css'
import Card from "./components/Card"

function App() {
  const [name,setName] = useState("");

  return (
    <div>
      <Card title="card1" name={name} setName={setName}/>
      <Card title="card2" name={name} setName={setName}/>
      {/* <p>i am inside parent component and value of name is:{name}</p> */}
    </div>
  )
}

export default App
